// Directory page functionality v2.0 - With pagination
// Note: currentLang, translations, and t() are provided by translations.js
let allBusinesses = [];
let map = null;
let markers = [];

// Initialize Leaflet map
function initMap() {
  if (!map) {
    // Initialize map centered on Belgium
    map = L.map('mapContainer').setView([50.5024, 4.4773], 8);
    
    // Add tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19
    }).addTo(map);
  }
}

// Update map markers based on filtered businesses
function updateMap(businesses) {
  if (!map) {
    initMap();
  }
  
  // Clear existing markers
  markers.forEach(marker => map.removeLayer(marker));
  markers = [];
  
  // Filter businesses with valid coordinates
  const validBusinesses = businesses.filter(b => 
    b.latitude && b.longitude && 
    !isNaN(b.latitude) && !isNaN(b.longitude)
  );
  
  if (validBusinesses.length === 0) {
    // Center on Belgium if no results
    map.setView([50.5024, 4.4773], 8);
    return;
  }
  
  // Create custom gold icon
  const goldIcon = L.divIcon({
    html: '<i class="fas fa-map-marker-alt" style="color: #FFD700; font-size: 32px; text-shadow: 0 2px 4px rgba(0,0,0,0.5);"></i>',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
    className: ''
  });
  
  // Add markers for filtered businesses
  const bounds = [];
  validBusinesses.forEach(business => {
    const lat = parseFloat(business.latitude);
    const lng = parseFloat(business.longitude);
    
    if (!isNaN(lat) && !isNaN(lng)) {
      const marker = L.marker([lat, lng], { icon: goldIcon }).addTo(map);
      
      // Create popup content
      const popupContent = `
        <div class="text-left" style="min-width: 200px;">
          ${business.logo_url ? `<div class="mb-2 text-center" style="max-width: 120px; max-height: 50px; margin: 0 auto; overflow: hidden;"><img src="${business.logo_url}" alt="${business.name}" style="max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain; display: block;"/></div>` : ''}

          <h3 class="font-bold text-lg mb-1" style="color: #FFD700;">${business.name}</h3>
          <p class="text-sm mb-2">${business.city}, ${business.province || ''}</p>
          ${business.phone ? `<p class="text-sm"><i class="fas fa-phone mr-1"></i> ${business.phone}</p>` : ''}
          ${business.website ? `<p class="text-sm"><a href="${business.website}" target="_blank" class="text-blue-600 hover:underline"><i class="fas fa-globe mr-1"></i> Website</a></p>` : ''}
          <a href="/directory?id=${business.id}" class="inline-block mt-2 px-3 py-1 bg-gold text-charcoal rounded text-sm font-medium">Details →</a>
        </div>
      `;
      
      marker.bindPopup(popupContent);
      markers.push(marker);
      bounds.push([lat, lng]);
    }
  });
  
  // Fit map to show all markers
  if (bounds.length > 0) {
    map.fitBounds(bounds, { padding: [50, 50], maxZoom: 12 });
  }
}

// Initialize directory
async function initDirectory() {
  // Get URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const type = urlParams.get('type') || '';
  const search = urlParams.get('search') || '';
  const city = urlParams.get('city') || '';
  const province = urlParams.get('province') || '';
  
  // Initialize map
  initMap();
  
  // Load provinces FIRST (before setting values)
  await loadProvinces();
  
  // NOW set form values (after provinces dropdown is populated)
  if (type) document.getElementById('filterType').value = type;
  if (search) document.getElementById('searchKeyword').value = search;
  if (province) {
    document.getElementById('filterProvince').value = province;
    // Load cities for this province
    await loadCities(province);
  }
  if (city) document.getElementById('filterCity').value = city;
  
  // Load businesses with filters applied
  await loadBusinesses();
}

// Load provinces
async function loadProvinces() {
  try {
    const provinces = [
      'Antwerpen', 'Limburg', 'Oost-Vlaanderen', 'Vlaams-Brabant', 'West-Vlaanderen',
      'Brussels Hoofdstedelijk Gewest',
      'Henegouwen', 'Luik', 'Luxemburg', 'Namen', 'Waals-Brabant'
    ];
    
    const select = document.getElementById('filterProvince');
    select.innerHTML = `<option value="">${t('allProvinces')}</option>` + 
      provinces.map(p => `<option value="${p}">${p}</option>`).join('');
  } catch (error) {
    console.error('Error loading provinces:', error);
  }
}

// Load cities based on province
async function loadCities(province) {
  if (!province) {
    document.getElementById('filterCity').innerHTML = `<option value="">${t('allCities')}</option>`;
    return;
  }
  
  try {
    const params = new URLSearchParams();
    params.append('province', province);
    const response = await axios.get(`/api/businesses?${params.toString()}`);
    const businesses = response.data.businesses || response.data;
    
    const cities = [...new Set(businesses.map(b => b.city))].sort();
    
    const select = document.getElementById('filterCity');
    select.innerHTML = `<option value="">${t('allCities')}</option>` + 
      cities.map(c => `<option value="${c}">${c}</option>`).join('');
  } catch (error) {
    console.error('Error loading cities:', error);
  }
}

// Pagination variables
let displayedCount = 0;
const itemsPerPage = 10;

// Load businesses with filters
async function loadBusinesses() {
  const type = document.getElementById('filterType').value;
  const province = document.getElementById('filterProvince').value;
  const city = document.getElementById('filterCity').value;
  const search = document.getElementById('searchKeyword').value;
  
  const params = new URLSearchParams();
  if (type) params.append('type', type);
  if (province) params.append('province', province);
  if (city) params.append('city', city);
  if (search) params.append('search', search);
  params.append('lang', currentLang);
  
  try {
    const response = await axios.get(`/api/businesses?${params.toString()}`);
    allBusinesses = response.data.businesses || response.data;
    
    // Randomize order every time
    shuffleArray(allBusinesses);
    
    // Reset pagination
    displayedCount = 0;
    
    // Display first 10 businesses
    displayBusinesses(allBusinesses);
    updateMap(allBusinesses); // Update map with all filtered results
  } catch (error) {
    console.error('Error loading businesses:', error);
    document.getElementById('businessList').innerHTML = 
      `<p class="text-gray-400 text-center py-12">${t('errorLoading')}</p>`;
  }
}

// Shuffle array (Fisher-Yates algorithm)
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Insert ads between business listings
function insertAds(businessHTML) {
  const businessCards = businessHTML.split('</div>\n    </div>');
  const adInterval = 6; // Show ad after every 6 businesses
  let result = [];
  
  businessCards.forEach((card, index) => {
    if (card.trim()) {
      result.push(card + '</div>\n    </div>');
      
      // Insert ad after every 6th business (but not after the last one)
      if ((index + 1) % adInterval === 0 && index < businessCards.length - 2) {
        result.push(`
    <div class="bg-cognac/10 p-4 rounded-lg border border-gold/20">
      <p class="text-xs text-gray-400 text-center mb-2">${t('advertisement')}</p>
      <ins class="adsbygoogle"
           style="display:block"
           data-ad-format="fluid"
           data-ad-layout-key="-ft-3t+ar-cd-51"
           data-ad-client="ca-pub-5342479402101014"
           data-ad-slot="8957424850"></ins>
      <script>
           (adsbygoogle = window.adsbygoogle || []).push({});
      </script>
    </div>
        `);
      }
    }
  });
  
  return result.join('');
}

// Display businesses in list with pagination
function displayBusinesses(businesses, append = false) {
  const container = document.getElementById('businessList');
  
  if (!businesses || businesses.length === 0) {
    container.innerHTML = `<p class="text-gray-400 text-center py-12">${t('noResults')}</p>`;
    // Remove load more button if exists
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (loadMoreBtn) loadMoreBtn.remove();
    return;
  }
  
  // Get businesses to display
  const startIndex = append ? displayedCount : 0;
  const endIndex = Math.min(startIndex + itemsPerPage, businesses.length);
  const businessesToShow = businesses.slice(startIndex, endIndex);
  
  console.log('Pagination:', {
    totalBusinesses: businesses.length,
    startIndex,
    endIndex,
    showing: businessesToShow.length,
    displayedCount
  });
  
  const businessHTML = businessesToShow.map(business => `
    <div class="bg-cognac/20 rounded-lg overflow-hidden border border-gold/30 card-hover">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4 p-6">
        <a href="/directory?id=${business.id}" class="flex items-center justify-center bg-gradient-to-br from-cognac to-charcoal rounded-lg h-32 overflow-hidden hover:border-2 hover:border-gold transition-all" style="position: relative;">
          ${business.logo_url ? `<img src="${business.logo_url}" alt="${business.name}" style="max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain; display: block; margin: auto; padding: 0.5rem; box-sizing: border-box;" />` : '<i class="fas fa-candy-cane text-gold text-5xl"></i>'}
        </a>
        
        <div class="md:col-span-3">
          <div class="flex items-start justify-between mb-2">
            <div>
              <h3 class="text-xl font-bold text-gold mb-1">${business.name}</h3>
              <p class="text-gray-400 text-sm">
                <i class="fas fa-map-marker-alt mr-1"></i>
                ${business.city}, ${business.province || ''}
              </p>
            </div>
            <span class="px-3 py-1 bg-gold/20 text-gold text-sm rounded">${business.type}</span>
          </div>
          
          <p class="text-gray-300 text-sm mb-3">${business.display_description || business.description || ''}</p>
          
          <div class="flex flex-wrap items-center gap-4">
            ${business.specialties || business.display_specialties ? `
              <div class="text-xs text-gray-400">
                <i class="fas fa-star text-gold mr-1"></i>
                ${business.display_specialties || business.specialties}
              </div>
            ` : ''}
            
            ${business.phone ? `
              <a href="tel:${business.phone}" class="text-gray-400 hover:text-gold text-sm" title="${t('callUs')}">
                <i class="fas fa-phone"></i>
              </a>
            ` : ''}
            
            ${business.email ? `
              <a href="mailto:${business.email}" class="text-gray-400 hover:text-gold text-sm" title="${t('emailUs')}">
                <i class="fas fa-envelope"></i>
              </a>
            ` : ''}
            
            ${business.website ? `
              <a href="${business.website}" target="_blank" class="text-gray-400 hover:text-gold text-sm" title="${t('visitWebsite')}">
                <i class="fas fa-globe"></i>
              </a>
            ` : ''}
            
            <a href="/directory?id=${business.id}" class="ml-auto text-gold hover:text-electric-green transition text-sm font-medium">
              ${t('details')} <i class="fas fa-arrow-right ml-1"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  `).join('');
  
  // Insert ads into business listings
  const businessHTMLWithAds = insertAds(businessHTML);
  
  // Append or replace content
  if (append) {
    container.insertAdjacentHTML('beforeend', businessHTMLWithAds);
  } else {
    container.innerHTML = businessHTMLWithAds;
  }
  
  // Update displayed count
  displayedCount = endIndex;
  
  // Update results count
  const totalCount = businesses.length;
  const businessWord = totalCount === 1 ? t('business') : t('businesses');
  document.getElementById('resultsCount').textContent = 
    `${displayedCount} ${t('of')} ${totalCount} ${businessWord} ${t('found')}`;
  
  // Show/hide load more button
  updateLoadMoreButton(businesses);
}

// Update load more button visibility
function updateLoadMoreButton(businesses) {
  let loadMoreBtn = document.getElementById('loadMoreBtn');
  
  if (displayedCount < businesses.length) {
    // Show button
    if (!loadMoreBtn) {
      loadMoreBtn = document.createElement('div');
      loadMoreBtn.id = 'loadMoreBtn';
      loadMoreBtn.className = 'text-center mt-8';
      loadMoreBtn.innerHTML = `
        <button onclick="loadMore()" class="btn-gold text-charcoal font-bold px-8 py-4 rounded-lg hover:scale-105 transition-transform">
          <i class="fas fa-chevron-down mr-2"></i>
          <span data-i18n="loadMore">Toon Meer</span>
        </button>
      `;
      document.getElementById('businessList').parentElement.appendChild(loadMoreBtn);
      
      // Translate button
      translatePage();
    }
  } else {
    // Hide button
    if (loadMoreBtn) {
      loadMoreBtn.remove();
    }
  }
}

// Load more businesses
function loadMore() {
  displayBusinesses(allBusinesses, true);
}



// Event listeners
document.addEventListener('DOMContentLoaded', () => {
  // Initialize directory
  initDirectory();
  
  // Filter change events
  document.getElementById('filterType')?.addEventListener('change', loadBusinesses);
  document.getElementById('filterProvince')?.addEventListener('change', (e) => {
    loadCities(e.target.value);
    loadBusinesses();
  });
  document.getElementById('filterCity')?.addEventListener('change', loadBusinesses);
  
  // Search on Enter
  document.getElementById('searchKeyword')?.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') loadBusinesses();
  });
  
  // Language selector
  document.getElementById('languageSelector')?.addEventListener('change', (e) => {
    currentLang = e.target.value;
    localStorage.setItem('language', currentLang);
    window.location.href = `?lang=${currentLang}`;
  });
  
  document.getElementById('mobileLanguageSelector')?.addEventListener('change', (e) => {
    currentLang = e.target.value;
    localStorage.setItem('language', currentLang);
    window.location.href = `?lang=${currentLang}`;
  });
});
