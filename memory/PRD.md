# BJP MLA Campaign Landing Page - Balakrishnan 2026

## Project Overview
**Campaign Landing Page** for BJP MLA candidate Balakrishnan contesting in the 2026 Tamil Nadu Assembly election from Radhapuram Taluk, Tirunelveli District.

**Started:** December 2025  
**Status:** Frontend Complete (Mock Data) - Ready for "Aha Moment"

---

## Candidate Information
- **Name:** Balakrishnan
- **Position:** BJP Candidate for MLA
- **Current Role:** Tirunelveli South Vice President
- **Constituency:** Radhapuram Taluk, Tamil Nadu
- **Election Year:** 2026

---

## User Personas
1. **Rural Voters** (Primary): Farmers, daily wage workers seeking development
2. **Youth Voters**: Students, job seekers looking for opportunities
3. **Women Voters**: Mothers, self-help group members concerned about safety
4. **Urban Semi-Rural Voters**: Small business owners, educated professionals

---

## Core Requirements (Static)

### Functional Requirements
1. **Multi-language Support**: Tamil + English toggle
2. **Lead Capture Form**: Name, Phone, Village, Primary Concern, Volunteer Checkbox
3. **WhatsApp Integration**: Click-to-WhatsApp with pre-filled message
4. **Responsive Design**: Mobile-first approach for low connectivity areas
5. **Sections Required**:
   - Hero Section
   - Candidate Introduction
   - Vision (5 Key Promises)
   - Local Issues Addressed
   - Achievements/Work Done
   - Emotional Appeal
   - Lead Capture Form
   - Footer

### Non-Functional Requirements
- Fast loading on 3G networks
- Optimized images (WebP, lazy loading)
- BJP color theme (Saffron, White, Green)
- Conversion-focused design with clear CTAs

---

## What's Been Implemented ✅

### Phase 1: Frontend with Mock Data (December 2025)
**Completed Components:**
1. ✅ **Header Component** - Sticky navigation with language toggle
2. ✅ **Hero Section** - Full-screen hero with candidate image, CTAs
3. ✅ **Introduction Section** - Candidate story with trust elements
4. ✅ **Vision Section** - 5 promise cards with expandable details
5. ✅ **Issues Section** - Timeline layout for local problems
6. ✅ **Achievements Section** - Stats grid + photo gallery
7. ✅ **Emotional Appeal Section** - Compelling family-focused message
8. ✅ **Lead Capture Form** - Complete form with validation (mock submission)
9. ✅ **WhatsApp Widget** - Floating button with popup and click-to-WhatsApp
10. ✅ **Footer** - Complete footer with contact info and social links

**Assets Used:**
- 5 candidate photos (provided by user)
- 7 thematic images (sourced via vision expert)

**Current State:**
- All sections functional with mock data
- Language toggle working (Tamil/English)
- Forms submitting to mock function
- WhatsApp integration with pre-filled messages
- Fully responsive design

---

## API Contracts (For Backend Phase)

### Lead Form Submission API
**Endpoint:** `POST /api/leads`  
**Request Body:**
```json
{
  "name": "string",
  "phone": "string (10 digits)",
  "village": "string",
  "concern": "string (enum)",
  "volunteer": "boolean",
  "language": "string (en/ta)",
  "timestamp": "datetime"
}
```
**Response:**
```json
{
  "success": true,
  "message": "Lead captured successfully",
  "lead_id": "uuid"
}
```

### Google Sheets Integration
**Purpose:** Export form data to Google Sheets for campaign team  
**Implementation:** Google Sheets API with OAuth 2.0  
**Required Scopes:** 
- `https://www.googleapis.com/auth/spreadsheets`
- `https://www.googleapis.com/auth/userinfo.email`

**Sheet Structure:**
| Timestamp | Name | Phone | Village | Concern | Volunteer | Language |
|-----------|------|-------|---------|---------|-----------|----------|

---

## Prioritized Backlog

### P0 Features (Next Phase - Backend)
1. **Google Sheets Integration**
   - Set up Google Cloud OAuth
   - Implement form submission to Sheets
   - Create campaign team dashboard access
   
2. **Backend API Development**
   - FastAPI endpoints for lead capture
   - MongoDB storage for backup
   - Form validation and sanitization

3. **WhatsApp Business API** (Optional Upgrade)
   - Automated welcome messages
   - Campaign updates broadcast
   - Two-way communication

### P1 Features (Enhancement)
1. **Analytics Dashboard**
   - Track form submissions
   - Monitor village-wise data
   - View concern categories

2. **Video Section**
   - Embed campaign videos
   - Testimonial videos
   - Auto-play controls

3. **Volunteer Portal**
   - Volunteer registration workflow
   - Task assignment system
   - Event coordination

### P2 Features (Future)
1. **Donation Integration**
   - Razorpay/Paytm integration
   - Transparent donation tracking

2. **Event Calendar**
   - Campaign events listing
   - RSVP functionality

3. **Blog/News Section**
   - Campaign updates
   - Press releases

---

## Next Tasks
1. ✅ Complete frontend with mock data
2. 🔄 **Get user confirmation to proceed with backend**
3. ⏳ Set up Google Sheets OAuth credentials
4. ⏳ Implement Google Sheets API integration
5. ⏳ Create backend endpoints for form submission
6. ⏳ Test end-to-end flow
7. ⏳ Deploy and handover to campaign team

---

## Technical Stack
- **Frontend:** React 19, Tailwind CSS, Shadcn UI
- **Backend:** FastAPI (Python)
- **Database:** MongoDB
- **Integrations:** Google Sheets API, WhatsApp Click-to-Chat
- **Hosting:** Emergent Preview Environment

---

## Design Guidelines Applied
- BJP theme colors (saffron #f97316, green #16a34a)
- Mobile-first responsive design
- High contrast for readability
- Smooth animations and transitions
- Accessible form inputs
- No emoji icons (used lucide-react instead)
- Clean, professional political campaign aesthetic
