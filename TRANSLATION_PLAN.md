# 🌐 Complete Translation Plan

## Current Status Analysis

**Existing translations.js**: ~250 lines with basic translations
**Coverage**: ~15% of site content

### Translation Gaps by Page:

#### Homepage (index.html) - ~60% missing
- Mission section (3 cards)
- Call-to-action buttons
- Stats descriptions
- Pairing preview section (4 items)
- Footer links section (4 columns)

#### Pairings Page (pairings.html) - ~95% missing
- Main intro text
- Whisky & Bourbon section (6 chocolate types + pairings)
- Wine section (3 chocolate types + wine pairings)
- Coffee section (4 chocolate types + coffee pairings)
- Cheese section (4 chocolate types + cheese pairings)
- Tasting tips sections
- Serving suggestions

#### History Page (history.html) - ~98% missing
- Main intro paragraphs
- Timeline entries (~10-15 historical events)
- Famous chocolatier stories
- Historical facts and descriptions

#### About Page (about.html) - ~99% missing
- Mission statement
- Company description
- Values and principles
- Team information (if any)
- Contact information

#### Directory Page (directory.html) - ~30% missing
- Page title and description
- Filter labels and dropdowns
- Search placeholder
- "No results" message
- Loading states
- Error messages

---

## Strategy

Given the massive amount of content (estimated 500+ translation keys needed), I propose:

### Phase 1: High-Priority Content (DO FIRST)
1. **Homepage** - Complete all missing translations
2. **Directory** - Complete filter/search translations
3. **Footer** - Universal across all pages

### Phase 2: Content Pages (DO AFTER)
4. **Pairings Page** - Full content translation
5. **History Page** - Full content translation
6. **About Page** - Full content translation

### Phase 3: Polish & Test
7. Test all pages in all 3 languages
8. Fix any translation issues
9. Verify language persistence

---

## Implementation Approach

I'll create translations in chunks:

1. **First**: Expand translations.js with all new keys
2. **Then**: Add data-i18n attributes to HTML systematically
3. **Finally**: Test and refine

---

## Estimated Content

**Homepage**: ~50 new translation keys
**Pairings**: ~200 new translation keys
**History**: ~150 new translation keys  
**About**: ~30 new translation keys
**Directory**: ~20 new translation keys
**Footer/Universal**: ~30 new translation keys

**Total**: ~480 new translation keys × 3 languages = ~1,440 translations to add

---

## Your Decision

This is a LARGE undertaking. Would you prefer:

**Option A: Do Everything Now** (30-45 minutes)
- Complete all pages at once
- Full site multilingual
- Large commit

**Option B: Phase by Phase** (Recommended)
- Phase 1: Homepage + Directory (10 minutes)
- Phase 2: Pairings + History (15 minutes)
- Phase 3: About + Polish (10 minutes)
- Allows testing between phases

**Option C: Cherry Pick**
- Tell me which specific pages/sections matter most
- Focus on those first
- Skip less important content

Which approach do you prefer?
