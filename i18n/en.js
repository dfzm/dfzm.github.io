// English locale: interface copy and case-study content for the site at /en/.
window.PORTFOLIO_I18N = {
  lang: "en",
  hashKey: "project",
  ui: {
    mediaStates: {
      before: "Before",
      proposal: "Proposal",
      live: "Live"
    },
    media: {
      placeholderLabel: "Placeholder: {label}",
      expandLabel: "View larger: {label}",
      expandText: "View larger",
      sourceLabel: "View the live page for {label} in a new tab",
      sourceText: "View live page",
      videoFallback: "Your browser can’t play this video.",
      videoDownload: "Download the {label} video",
      scrubLabel: "Interactive viewer: {label}",
      scrubHint: "Scroll here to explore"
    },
    case: {
      startDate: "Development started",
      category: "Category",
      role: "My role",
      status: "Status",
      challenge: "The challenge",
      participation: "My contribution",
      process: "Process",
      deliverables: "Deliverables",
      technology: "Technology",
      note: "Status and limitations"
    },
    newTab: "(opens in a new tab)",
    downloadApk: "Download the APK",
    store: {
      label: "View MoviMoney on Google Play (opens in a new tab)",
      badgeSrc: "imgs proyectos/google-play-badge-en.png",
      badgeAlt: "Get it on Google Play"
    },
    announcer: {
      projectOpened: "{title} case study opened.",
      projectClosed: "Case study closed.",
      lightboxStep: "Image {current} of {total}. {label}"
    },
    theme: {
      toLight: "Switch to light theme",
      toDark: "Switch to dark theme",
      lightText: "Light",
      darkText: "Dark"
    }
  },
  projects: {
    "ca-na-tess": {
      index: "05",
      title: "Ca na Tess",
      category: "Professional project",
      status: "Live · 2026",
      role: "UX/UI redesign + content research + development",
      color: "#e7c9bc",
      summary: "I redesigned and built Ca na Tess’s nutrition consultation form, turning a 12-step external form into a 7-step experience built into the website and ready for consultations about both dogs and cats.",
      challenge: "The original form lived outside the website, was spread across 12 steps, and was written mainly for dogs. The challenge was to fold it into a 7-step experience and adapt its questions so they also worked for cat consultations, without losing clarity.",
      participation: "I analyzed the form and its questions, researched the differences between the two scenarios, reorganized the structure, reviewed the copy and fields, designed the interface, and built the integration into the website.",
      process: [
        ["Audit of the original form", "I reviewed the Google Forms structure and found that many questions were written mainly with dogs in mind."],
        ["Research and adaptation", "I researched which information should be kept, adjusted, or broadened for dog and cat consultations, and adapted the form’s language."],
        ["Flow reorganization", "I reorganized the fields to go from 12 steps to 7 and grouped the information more clearly."],
        ["Interface design", "I designed an interface that fits visually with the website and the context of the nutrition consultation."],
        ["Development and integration", "I built the form with Gravity Forms in WordPress and replaced the external process."]
      ],
      deliverables: ["New 7-step structure", "Questionnaire adapted for dogs and cats", "Revised questions, copy, and fields", "Form interface", "Form integrated into WordPress"],
      technology: "UX/UI · Figma · WordPress · Gravity Forms",
      link: "https://canatess.com/consulta-nutricional",
      linkLabel: "Visit the Ca na Tess nutrition consultation",
      introLinkLabel: "View project",
      mediaSections: [
        {
          placement: "afterChallenge",
          heading: "From an external form to an integrated flow",
          intro: "These screenshots show the original external form that led to the redesign and to its integration into the website.",
          layout: "split",
          items: [
            { type: "image", src: "Proyectos/CANATESS/FORMULARIO DE ANTES 1.png", width: 972, height: 992, alt: "First screenshot of the original Ca na Tess external form", label: "Previous version", caption: "The first part of the external form, which was reorganized to bring it into the web experience.", expandable: true },
            { type: "image", src: "Proyectos/CANATESS/FORMULARIO DE ANTES 2.png", width: 962, height: 1022, alt: "Second screenshot of the original Ca na Tess external form", label: "Previous version", caption: "A second view of the previous form, showing how long and spread out the process was.", expandable: true }
          ]
        },
        {
          placement: "afterParticipation",
          heading: "Interface design",
          intro: "The visual proposal turns the shared structure for dogs and cats into an experience that’s consistent with the site and ready for implementation.",
          layout: "asymmetric",
          items: [
            { type: "image", src: "Proyectos/CANATESS/FIGMA 2.png", width: 1635, height: 980, alt: "Main Figma design of the Ca na Tess nutrition form for dogs and cats", label: "Interface design", caption: "Main view of the redesigned form and the shared hierarchy for both scenarios.", expandable: true },
            { type: "image", src: "Proyectos/CANATESS/FIGMA 1.png", width: 1595, height: 976, alt: "Supporting Figma iteration of the Ca na Tess form for dogs and cats", label: "Figma iteration", caption: "Supporting evidence of how the interface was explored and refined for both scenarios.", expandable: true }
          ]
        },
        {
          placement: "afterProcess",
          heading: "Final implementation",
          intro: "The final result combines the desktop implementation with its responsive mobile version.",
          layout: "implementation",
          items: [
            { type: "image", src: "Proyectos/CANATESS/web-1.gif", width: 1902, height: 946, alt: "Animated demo of the integrated Ca na Tess form on desktop", label: "Implementation · desktop", caption: "Animated demo of the integrated form and its flow on the website.", expandable: true },
            { type: "image", src: "Proyectos/CANATESS/Web 2.png", width: 427, height: 925, alt: "Mobile version of the integrated Ca na Tess form", label: "Implementation · mobile", caption: "Responsive version of the integrated form for mobile screens.", expandable: true }
          ]
        }
      ]
    },
    "colive": {
      index: "06",
      title: "Colive",
      category: "Professional project",
      status: "Proposals implemented · 2025",
      role: "UX/UI audit · wireframes · high-fidelity design",
      color: "#a9c1ec",
      summary: "I audited Colive’s booking flow step by step, from search to paying the deposit, and turned every point of friction into a concrete proposal. The Colive team brought many of those proposals to the live site.",
      challenge: "Booking a room on colive.es meant getting through seven screens. The calendar only let you pick whole months and accepted ranges that broke the minimum stay, the room page never confirmed whether the room was available for your dates, signing in pulled people out of the flow, and billing details were requested after payment. The challenge was to back up every point with evidence and propose a continuous flow the team could build.",
      participation: "I went through and documented the entire process the way someone looking for a room would, organized the findings by when they appear and what they cost the person booking, redrew the flow architecture, built animated wireframes to validate the sequence, and designed the final screens. The review also covered the post-booking profile, the automated emails, and three company pages.",
      process: [
        ["Flow audit", "I went through the full booking flow on colive.es as a real user would, from search to paying the deposit, and documented every point where the flow broke down."],
        ["Diagnosis and priorities", "I ranked the findings by where they appear in the flow and by their cost: first the ones that keep people from moving forward, then the ones that create doubt."],
        ["Architecture and wireframes", "I rebuilt the flow in Figma as one continuous sequence and validated it with animated wireframes before touching the interface."],
        ["High-fidelity design", "I designed search, availability, and booking with sign-in, add-ons, billing, and payment all in the same context, along with the My Account screens."],
        ["Handoff and adoption", "I presented the audit with each finding paired with its solution. The Colive team implemented many of the proposals on the live site."]
      ],
      deliverables: ["UX/UI audit of the booking flow", "Audit of the post-booking profile", "Booking flow architecture", "Animated wireframes for all four steps", "High-fidelity design in Figma", "Proposals for emails and company pages"],
      technology: "UX/UI audit · Wireframes · High-fidelity design · Figma",
      link: "https://colive.es/",
      linkLabel: "Visit the Colive website",
      introLinkLabel: "View project",
      note: "The audit, wireframes, and high-fidelity design are my work; development was handled by the Colive team. I wasn’t involved in the implementation, and measuring results wasn’t part of the scope, so the comparison with the live site is visual and doesn’t include metrics. The My Account proposals were never published. The post-booking emails and company pages aren’t included in this selection because there are no publishable exports of them.",
      mediaSections: [
        {
          placement: "afterChallenge",
          heading: "The flow that needed an audit",
          intro: "This is how you searched for a room on colive.es in 2025. These three screens are the starting point: almost every finding begins here.",
          layout: "lead-split",
          items: [
            { type: "image", src: "Proyectos/COLIVE/antes/Home.png", width: 1897, height: 865, alt: "Colive home page in 2025 with a search bar that only lets you pick months", label: "Home · 2025", caption: "The search bar asked for check-in and check-out by whole month. Below it, “Minimum stay: 32 days” appeared as plain informational text, with no action attached.", expandable: true, featured: true },
            { type: "image", src: "Proyectos/COLIVE/antes/Listado.png", width: 1884, height: 897, alt: "Colive results page in 2025 with filters taking up three rows", label: "Results · 2025", caption: "The filters took up three rows before the first room, and alternative dates were listed as blue text links.", expandable: true },
            { type: "image", src: "Proyectos/COLIVE/antes/Habitacion.png", width: 1559, height: 672, alt: "Colive room page in 2025 with red Contact and Book buttons", label: "Room page · 2025", caption: "The room page showed the price and dates but never confirmed whether that room was available for the selected range. “CONTACT” carried the same visual weight as “BOOK.”", expandable: true }
          ]
        },
        {
          placement: "afterChallenge",
          heading: "And seven more screens to get to payment",
          intro: "From the “Book” button to the confirmation, there were seven full screens, each with its own header, background, and step indicator. None of them reminded you which room or which dates you were booking.",
          layout: "storyboard",
          items: [
            { type: "image", src: "Proyectos/COLIVE/antes/Reservar 1.png", width: 1676, height: 532, alt: "Colive sign-in page in 2025, full screen and outside the booking flow", label: "Step 1 · sign in", caption: "Clicking “Book” led to a generic sign-in page. The booking disappeared from the screen.", expandable: true },
            { type: "image", src: "Proyectos/COLIVE/antes/Reservar 2.png", width: 1510, height: 665, alt: "Colive sign-up form in 2025 with six required fields", label: "Step 2 · sign up", caption: "Anyone without an account was sent to yet another page, with six required fields before they could continue.", expandable: true },
            { type: "image", src: "Proyectos/COLIVE/antes/Reservar 3.png", width: 1288, height: 529, alt: "Colive screen saying a sign-up confirmation email has been sent", label: "Step 3 · check your email", caption: "A third screen asked people to leave the site, open their email, and come back.", expandable: true },
            { type: "image", src: "Proyectos/COLIVE/antes/Reservar 4.png", width: 1278, height: 532, alt: "Colive account-activated screen with a button to view the last room", label: "Step 4 · come back", caption: "After activating the account, a “View last room” button tried to take the person back to where they had left off.", expandable: true },
            { type: "image", src: "Proyectos/COLIVE/antes/Reservar 5.png", width: 1326, height: 1223, alt: "Colive booking details page with add-ons, payment method, and notes in a single column", label: "Step 5 · details and add-ons", caption: "The booking details were shown as a list of text, followed by add-ons, payment method, notes, and legal terms, all on a single page.", expandable: true },
            { type: "image", src: "Proyectos/COLIVE/antes/Reservar 6.png", width: 1480, height: 746, alt: "Colive interstitial screen with a red warning about the redirect to an external payment gateway", label: "Step 6 · interstitial screen", caption: "Before paying, a bridge screen appeared with a warning in red: “You’re about to be redirected to an external payment gateway. Please don’t close this tab.”", expandable: true },
            { type: "image", src: "Proyectos/COLIVE/antes/Reservar 7.png", width: 1288, height: 1449, alt: "Colive personal and billing details form shown after payment", label: "Step 7 · billing, after payment", caption: "After payment came the longest form of all. Its step indicator showed three steps; the one on the previous screen showed four, with different names.", expandable: true }
          ]
        },
        {
          placement: "afterParticipation",
          heading: "The architecture, before drawing anything",
          intro: "Before designing any screens, I rebuilt the entire flow in Figma: which steps exist, which ones aren’t needed, and at what point the person needs to see the context of their booking.",
          layout: "lead-split",
          items: [
            { type: "image", src: "Proyectos/COLIVE/wireframes/FIGMA 1.png", width: 1657, height: 985, alt: "Figma working canvas with the Colive booking flow connected by arrows", label: "Working map", caption: "The full canvas: screens connected by arrows, availability states, and the sign-in variants that needed solving.", expandable: true, featured: true },
            { type: "image", src: "Proyectos/COLIVE/wireframes/wireframe-proceso-reserva-1.png", width: 1340, height: 796, alt: "Wireframe of the Colive booking flow with a four-step accordion and the summary alongside it", label: "The core decision", caption: "Two columns: the four steps in an accordion on the left and the booking summary always visible on the right. Seven screens become one.", expandable: true },
            { type: "image", src: "Proyectos/COLIVE/wireframes/FIGMA 2.png", width: 1162, height: 897, alt: "Wireframe of the Colive sign-in options next to the booking summary", label: "Sign-in detail", caption: "The sign-in options—Google, Apple, email, or sign-up—handled within the same panel, without leaving the booking.", expandable: true }
          ]
        },
        {
          placement: "afterParticipation",
          heading: "Wireframes in motion",
          intro: "The wireframes were prototyped with animation to make sure the sequence held up before investing in the interface. Each demo corresponds to a moment in the flow.",
          layout: "split",
          items: [
            { type: "image", src: "Proyectos/COLIVE/GIF/wireframe-calendario-por-dias.gif", width: 1280, height: 720, alt: "Animated demo of the day-based check-in and check-out fields proposed for Colive", label: "Dates by day", caption: "Check-in and check-out as specific dates, with check-out locked until a check-in date is chosen.", expandable: true },
            { type: "image", src: "Proyectos/COLIVE/GIF/wiframe-filtros.gif", width: 1280, height: 720, alt: "Animated demo of the horizontal filters proposed for the Colive listings", label: "Filters in one row", caption: "Each filter is a button that opens its options in a dropdown, without taking vertical space away from the results.", expandable: true },
            { type: "image", src: "Proyectos/COLIVE/GIF/primeros-wiframe-panel-reserva.gif", width: 1920, height: 812, alt: "Animated demo of the first booking panel proposed for Colive", label: "First booking panel", caption: "The first version of the booking panel, with the summary on the right, still in gray.", expandable: true },
            { type: "image", src: "Proyectos/COLIVE/GIF/wireframe-inicio-proceso-reserva-paso-1.gif", width: 798, height: 338, alt: "Animated demo of the sign-in step within the Colive booking flow", label: "Step 1 · sign-in", caption: "Sign in or sign up in a modal over the booking itself. Once that’s done, step 2 unlocks automatically.", expandable: true },
            { type: "image", src: "Proyectos/COLIVE/GIF/wireframe-inicio-proceso-reserva-paso-2-3.gif", width: 798, height: 338, alt: "Animated demo of the add-ons and billing steps in the Colive booking flow", label: "Steps 2 and 3 · add-ons and billing", caption: "Add-ons are added to the summary in real time, and billing is completed before payment, not after.", expandable: true },
            { type: "image", src: "Proyectos/COLIVE/GIF/wireframe-inicio-proceso-reserva-paso-3-4.gif", width: 798, height: 338, alt: "Animated demo of payment through an embedded payment gateway in the Colive booking flow", label: "Steps 3 and 4 · payment", caption: "The payment gateway opens as a modal inside Colive, with the deposit amount shown before it opens.", expandable: true }
          ]
        },
        {
          placement: "afterProcess",
          heading: "Finding 01 · Search didn’t let you get started",
          intro: "If you didn’t know your dates yet, the home page had nothing for you: no rooms and no visible way forward. I proposed taking that option out of the calendar and placing it below the fields.",
          layout: "chain",
          items: [
            { type: "image", src: "Proyectos/COLIVE/antes/buscador-home.png", width: 1025, height: 198, alt: "Colive home page search bar in 2025 with check-in and check-out by month", label: "Home page search", caption: "Check-in and check-out by month, plus a minimum stay mentioned in loose text. Without dates, there was no way to move forward.", state: "before", expandable: true },
            { type: "image", src: "Proyectos/COLIVE/diseño de Alta fidelidad/slide10_image3.png", width: 893, height: 397, alt: "Search module proposed for Colive with the Explore options without dates button below the fields", label: "Search module", caption: "“Don’t have specific dates in mind?” and a dedicated button to explore without dates, outside the calendar and visible from the start.", state: "proposal", expandable: true },
            { type: "image", src: "Proyectos/COLIVE/web publica/home.png", width: 1912, height: 1081, alt: "Current colive.es home page with the Explore options without dates button below the search bar", label: "colive.es today", caption: "The current live home page includes the module exactly as proposed, with the “Explore options without dates” button below the fields.", state: "live", sourceUrl: "https://colive.es/", expandable: true }
          ]
        },
        {
          placement: "afterProcess",
          heading: "Detail · the calendar and the buried button",
          intro: "Two pieces of evidence for the same problem. The calendar forced people to think in months when the decision is made in days, and the only option for anyone without dates was hidden inside the calendar itself.",
          layout: "chain",
          items: [
            { type: "image", src: "Proyectos/COLIVE/antes/calendario-meses.png", width: 346, height: 399, alt: "Colive calendar in 2025 showing a grid of months instead of days", label: "Month grid", caption: "Opening the date field showed a grid of months. Choosing “June 3 to June 28” wasn’t possible.", state: "before", expandable: true },
            { type: "image", src: "Proyectos/COLIVE/antes/calendario-boton-oculto.png", width: 402, height: 606, alt: "Colive calendar with the I don’t know yet button hidden below the month grid", label: "“I don’t know yet,” buried", caption: "The option for people without dates lived inside the calendar, below the months. You had to open it to find it.", state: "before", expandable: true },
            { type: "image", src: "Proyectos/COLIVE/diseño de Alta fidelidad/calendario-por-dias.png", width: 428, height: 549, alt: "Calendar proposed for Colive with a day-by-day view", label: "Day-based selection", caption: "A day view from the first click—the pattern people already know from Airbnb or Booking—with check-out validated against the minimum stay.", state: "proposal", expandable: true }
          ]
        },
        {
          placement: "afterProcess",
          heading: "Finding 02 · Filters competed with the rooms",
          intro: "On the results page, the filters took up three rows before the first room appeared. I proposed condensing them into a single row of dropdown buttons.",
          layout: "chain",
          items: [
            { type: "image", src: "Proyectos/COLIVE/antes/filtros-tres-filas.png", width: 1857, height: 237, alt: "Colive listing filters in 2025 spread across three rows with a price slider", label: "Three rows of filters", caption: "City, district, dates, price, room, sort order, and two loose checkboxes, spread across three rows of different heights.", state: "before", expandable: true },
            { type: "image", src: "Proyectos/COLIVE/diseño de Alta fidelidad/filtros-horizontales.png", width: 1874, height: 113, alt: "Horizontal filter bar proposed for Colive with seven icon buttons", label: "A single row", caption: "Seven buttons with an icon and a label in a single row. Each one opens its options when clicked instead of taking up permanent space.", state: "proposal", expandable: true },
            { type: "image", src: "Proyectos/COLIVE/web publica/listado.png", width: 1912, height: 1087, alt: "Current colive.es listings with the filters in a single horizontal row", label: "colive.es today", caption: "The current live listings page uses the one-row filter bar, and the rooms start much higher up the page.", state: "live", sourceUrl: "https://colive.es/", expandable: true }
          ]
        },
        {
          placement: "afterProcess",
          heading: "Detail · alternative dates that looked like dead text",
          intro: "When there were only a few results, the site suggested other date ranges. But it showed them as lines of blue text, with no hierarchy or button styling: nobody could tell whether they were informational or clickable. This proposal is also live on the public listings page today.",
          layout: "chain-pair",
          items: [
            { type: "image", src: "Proyectos/COLIVE/antes/fechas-alternativas-texto.png", width: 838, height: 186, alt: "Colive alternative dates in 2025 shown as lines of blue text", label: "Text links", caption: "“November - 2025 -> December - 2025: 149 rooms available,” repeated three times in plain text.", state: "before", expandable: true },
            { type: "image", src: "Proyectos/COLIVE/diseño de Alta fidelidad/slide14_image15.png", width: 1711, height: 237, alt: "Alternative date cards proposed for Colive with a calendar icon and the number of rooms", label: "Clickable cards", caption: "Cards with a calendar icon, a readable date range, and the number of rooms highlighted, set apart from the current search.", state: "proposal", expandable: true }
          ]
        },
        {
          placement: "afterProcess",
          heading: "Finding 03 · The room page confirmed nothing",
          intro: "You’d land on a room and still not know the only thing that mattered: whether it was available for your dates. And the contact button carried the same weight as the booking button.",
          layout: "chain",
          items: [
            { type: "image", src: "Proyectos/COLIVE/antes/habitacion-cta.png", width: 355, height: 272, alt: "Colive room booking panel in 2025 with red Contact and Book buttons", label: "No confirmation", caption: "Dates, a crossed-out price, and two identical red buttons. No sign of availability for the selected range.", state: "before", expandable: true },
            { type: "image", src: "Proyectos/COLIVE/wireframes/slide22_image37.png", width: 820, height: 634, alt: "Booking panel proposed for Colive with a message saying the room is available for the selected dates", label: "Explicit confirmation", caption: "“This room is available for your selected dates!” and “CONTACT” turned into “HAVE QUESTIONS?”, secondary to “BOOK NOW.”", state: "proposal", expandable: true },
            { type: "image", src: "Proyectos/COLIVE/web publica/habitacion.png", width: 607, height: 626, alt: "Current colive.es booking panel with the availability confirmation and the Book now button", label: "colive.es today", caption: "The current live panel shows the availability confirmation, the low-availability notice, and the button hierarchy just as proposed.", state: "live", sourceUrl: "https://colive.es/", expandable: true }
          ]
        },
        {
          placement: "afterProcess",
          heading: "Finding 04 · Booking kicked you out of the flow",
          intro: "This is the biggest change. Seven screens become one: four steps in an accordion on the left and the booking summary always visible on the right.",
          layout: "chain",
          items: [
            { type: "image", src: "Proyectos/COLIVE/antes/Reservar 1.png", width: 1676, height: 532, alt: "Colive sign-in page in 2025 with no reference to the booking in progress", label: "Full-screen sign-in", caption: "Clicking “Book” opened a generic sign-in page over a cover photo. No room, dates, or price in sight.", state: "before", expandable: true },
            { type: "image", src: "Proyectos/COLIVE/diseño de Alta fidelidad/slide27_image25.png", width: 938, height: 495, alt: "Design proposed for Colive with a four-step accordion and the booking summary alongside it", label: "Four steps and a summary", caption: "Sign-in, add-ons, billing, and confirmation as steps that unlock in order, with the dates, length of stay, and total price always in view.", state: "proposal", expandable: true },
            { type: "image", src: "Proyectos/COLIVE/web publica/inicio-proceso-reserva.png", width: 1911, height: 1090, alt: "Current colive.es booking flow with a four-step accordion and the booking details on the right", label: "colive.es today", caption: "The current live booking flow is a single screen with the four numbered steps and the booking breakdown on the right, deposit included.", state: "live", sourceUrl: "https://colive.es/", expandable: true }
          ]
        },
        {
          placement: "afterProcess",
          heading: "Detail · signing in without leaving the booking",
          intro: "Sign-up was spread across four chained pages. The proposal handles it in a modal over the booking itself, with quick sign-in through Google or Apple and code verification only if you sign up manually.",
          layout: "chain-pair",
          items: [
            { type: "image", src: "Proyectos/COLIVE/antes/Reservar 2.png", width: 1510, height: 665, alt: "Colive sign-up form in 2025 on a separate page", label: "Sign-up on another page", caption: "The first of four sign-up pages: six fields, followed by the activation email and a manual return to the site.", state: "before", expandable: true },
            { type: "image", src: "Proyectos/COLIVE/diseño de Alta fidelidad/slide27_image29.png", width: 1462, height: 725, alt: "Sign-in modal proposed for Colive with Google, Apple, email, and sign-up options", label: "Modal over the booking", caption: "Four ways to sign in, in a modal with the booking visible behind it. Once it closes, the next step unlocks automatically.", state: "proposal", expandable: true }
          ]
        },
        {
          placement: "afterProcess",
          heading: "Finding 05 · Billing came after payment",
          intro: "The end of the flow reversed the logical order: first the external payment gateway, then the billing form. In the proposal, billing is step 3, before payment, and the payment gateway opens inside Colive with the amount shown upfront.",
          layout: "chain-pair",
          items: [
            { type: "image", src: "Proyectos/COLIVE/antes/Reservar 6.png", width: 1480, height: 746, alt: "Colive interstitial payment screen in 2025 with a red warning about the redirect to an external payment gateway", label: "Jump to an external gateway", caption: "A bridge screen and a red warning that you were leaving the site. Its step indicator showed four steps.", state: "before", expandable: true },
            { type: "image", src: "Proyectos/COLIVE/antes/Reservar 7.png", width: 1288, height: 1449, alt: "Colive personal and billing details form requested after payment", label: "Billing, after payment", caption: "The longest form in the process showed up when the person thought they were already done. And its indicator showed three steps, with different names from the ones on the previous screen.", state: "before", expandable: true }
          ]
        },
        {
          placement: "afterDeliverables",
          heading: "My Account · the part that didn’t reach production",
          intro: "The audit also covered the post-booking profile. These three proposals were delivered but haven’t been published to date, so there’s only a before and a proposal here.",
          layout: "chain-pair",
          items: [
            { type: "image", src: "Proyectos/COLIVE/antes/menu-mi-cuenta.png", width: 255, height: 381, alt: "Colive user dropdown menu in 2025 with seven stacked items", label: "User menu", caption: "Seven items stacked in the header dropdown, with no grouping or hierarchy.", state: "before", expandable: true },
            { type: "image", src: "Proyectos/COLIVE/diseño de Alta fidelidad/menu-mi-cuenta.png", width: 339, height: 338, alt: "User menu proposed for Colive, reduced to My Account, Favorites, and Sign Out", label: "One destination", caption: "The dropdown shrinks to three items, and every section now lives inside “My Account,” with fixed side navigation.", state: "proposal", expandable: true },
            { type: "image", src: "Proyectos/COLIVE/antes/pagos-contrato.png", width: 424, height: 338, alt: "Colive contract payments section in 2025 with checked boxes and no total", label: "Contract payments", caption: "The section was called “Contract payments” and showed checked boxes with no total and no final payment action.", state: "before", expandable: true },
            { type: "image", src: "Proyectos/COLIVE/diseño de Alta fidelidad/cobros-y-pagos.png", width: 1565, height: 928, alt: "Proposed Charges and Payments design for Colive with statuses, selectable items, and the total due", label: "Charges and payments", caption: "Cards with a “Paid” or “Pending” status, selectable items, a total calculated in real time, and a single “Pay Now” button.", state: "proposal", expandable: true },
            { type: "image", src: "Proyectos/COLIVE/antes/documentos.png", width: 463, height: 307, alt: "Colive documents section in 2025 with contracts and invoices as text links", label: "Documents", caption: "Contracts and invoices listed as text links, with no issue date and no actions to view or download them.", state: "before", expandable: true },
            { type: "image", src: "Proyectos/COLIVE/diseño de Alta fidelidad/contratos-y-facturas.png", width: 1369, height: 549, alt: "Proposed Contracts and Invoices design for Colive with cards, dates, and View and Download buttons", label: "Contracts and invoices", caption: "Each document as a card with an icon, a readable title, its creation date, and the “View” and “Download” buttons close at hand.", state: "proposal", expandable: true }
          ]
        }
      ]
    },
    "mega": {
      index: "07",
      title: "Mega",
      category: "Professional project",
      status: "Live · 2025",
      role: "Front-end implementation from an existing design",
      color: "#e9d154",
      summary: "I turned Mega’s complete Figma design into a working website. I built its screens in Elementor Pro on WordPress and fine-tuned the interface to preserve the layout on desktop and mobile.",
      challenge: "The challenge was to bring an already finished design into a real, editable web environment, respecting the layout, components, and content hierarchy without losing fidelity in the move from Figma to Elementor Pro.",
      participation: "My job was to turn the design I received into a working implementation: I set up the structure, built the screens, handled the responsive behavior, and reviewed the result against Figma. I didn’t create the original visual design.",
      process: [
        ["Review of the provided design", "I reviewed the screens, components, states, and visual rules defined in Figma."],
        ["Structure setup", "I organized the pages and sections so everything stays editable in WordPress."],
        ["Implementation", "I built the screens and components in Elementor Pro on WordPress."],
        ["Responsive adaptation", "I adjusted layout, sizing, and spacing for different screen sizes."],
        ["Visual review", "I compared the implementation with the reference and fixed the differences I found."]
      ],
      deliverables: ["Page structure in Elementor Pro", "Implemented screens and components", "Responsive adaptation", "Review against the Figma design"],
      technology: "WordPress · Elementor Pro · Responsive",
      link: "https://www.mega.nl/",
      linkLabel: "Visit the Mega website",
      introLinkLabel: "View project",
      mediaSections: [
        {
          placement: "afterProcess",
          heading: "Two designs, one WordPress install",
          intro: "The project brought two experiences together in the same WordPress install: Mega for consumers and Mega Zakelijk for businesses. I built both from two different Figma designs, keeping their components, navigation, and responsive behavior distinct within a single editable install.",
          layout: "full",
          items: [
            { type: "image", aspect: "16 / 9", alt: "Temporary placeholder for Mega’s visual references", label: "Temporary visual sample · Mega", caption: "The Figma reference images are temporarily hidden. The original design was created by the Selva Digital team." }
          ]
        },
        {
          placement: "afterProcess",
          heading: "Live implementation · desktop",
          intro: "Both home pages were published on the same editable install, preserving the identity and hierarchy of each experience.",
          layout: "comparison",
          items: [
            { type: "image", src: "Proyectos/MEGA/pagina-entera.optimized.jpg", width: 1920, height: 7453, alt: "Full live home page of Mega for consumers on desktop", label: "Live implementation · Mega · Consumers", caption: "Full screenshot of the live Mega consumer site on desktop, ready to explore in the viewer.", sourceUrl: "https://www.mega.nl/", expandable: true, scrollScrub: true },
            { type: "image", src: "Proyectos/MEGA/pagina-entera-zakelijk.optimized.jpg", width: 1920, height: 6853, alt: "Full live home page of Mega Zakelijk for businesses on desktop", label: "Live implementation · Mega Zakelijk · Business", caption: "Full screenshot of the live Mega Zakelijk site on desktop, ready to explore in the viewer.", sourceUrl: "https://www.mega.nl/zakelijk/", expandable: true, scrollScrub: true }
          ]
        },
        {
          placement: "afterProcess",
          heading: "Live implementation · mobile",
          intro: "Responsive behavior was handled separately for each design, adapting layout, navigation, and scale to the mobile viewport.",
          layout: "comparison",
          items: [
            { type: "image", src: "Proyectos/MEGA/pagina-entera-mega-movil.optimized.webp", width: 429, height: 9969, alt: "Full live home page of Mega for consumers on mobile", label: "Live implementation · Mega · Consumers · mobile", caption: "Full screenshot of the live Mega consumer site on mobile.", sourceUrl: "https://www.mega.nl/", expandable: true, scrollScrub: true, scrubViewport: "9 / 16" },
            { type: "image", src: "Proyectos/MEGA/pagina-entera-zakelijk-movil.optimized.webp", width: 429, height: 8825, alt: "Full live home page of Mega Zakelijk for businesses on mobile", label: "Live implementation · Mega Zakelijk · Business · mobile", caption: "Full screenshot of the live Mega Zakelijk site on mobile.", sourceUrl: "https://www.mega.nl/zakelijk/", expandable: true, scrollScrub: true, scrubViewport: "9 / 16" }
          ]
        }
      ]
    },
    "barcelo-indajaus": {
      index: "08",
      title: "Barceló Indajaus",
      category: "Professional project",
      status: "Live · 2024",
      role: "E-commerce implementation from an existing reference",
      color: "#d96a4d",
      summary: "I rebuilt Barceló Indajaus’s existing WordPress store in PrestaShop, carrying its visual structure and its catalog and product experience over to the new platform.",
      challenge: "The challenge wasn’t to create a new visual direction but to reproduce an existing store on a different platform, keeping the identity and structure of the WordPress reference.",
      participation: "I analyzed the reference, moved the store’s structure over to PrestaShop, adapted how the catalog and products are presented, and reviewed the implementation visually. I didn’t create the original design.",
      process: [
        ["Reference review", "I analyzed the page types, navigation, layout, and visual patterns of the existing site."],
        ["E-commerce structure", "I mapped the landing pages, navigation, catalog, categories, and product pages."],
        ["PrestaShop implementation", "I adapted the visual reference to the available templates and components."],
        ["Responsive adaptation", "I reviewed navigation, catalog, and product pages across different screen sizes."],
        ["Fidelity review", "I compared the implementation with the reference and adjusted layout, spacing, and hierarchy."]
      ],
      deliverables: ["Store structure in PrestaShop", "Catalog, categories, and product pages", "Responsive adaptation", "Visual fidelity review"],
      technology: "PrestaShop · E-commerce · Responsive",
      link: "https://barceloindajaus.com/",
      linkLabel: "Visit the Barceló Indajaus store",
      introLinkLabel: "View project",
      note: "I’m currently also responsible for the site’s support, maintenance, and changes. As part of that ongoing technical work, I first completed a stable migration from PrestaShop 7 to PrestaShop 8 and, in 2026, a second major upgrade from PrestaShop 8 to PrestaShop 9. Both migrations went smoothly, and the site stayed up and running after each upgrade.",
      mediaSections: [
        {
          placement: "afterProcess",
          heading: "Home page · from WordPress to PrestaShop",
          intro: "The home page keeps the identity and promotional feel of the reference, carried over to a PrestaShop structure built to run the store.",
          layout: "comparison",
          items: [
            { type: "image", src: "Proyectos/BARCELO-INDAJAUS/ANTES Barcelo wordpress.png", width: 1918, height: 7572, alt: "Full Barceló Indajaus home page before the migration, built on WordPress", label: "Reference · WordPress", caption: "The original reference laid out the campaign and its products on a long promotional page that served as the basis for the migration.", state: "before", expandable: true, scrollScrub: true },
            { type: "image", src: "Proyectos/BARCELO-INDAJAUS/AHORA Barcelo prestashop.png", width: 1900, height: 5884, alt: "Full Barceló Indajaus home page after the migration to PrestaShop", label: "Implementation · PrestaShop", caption: "The implementation brings the visual identity to PrestaShop and reorganizes the content to fit the store’s navigation and day-to-day operations.", state: "live", sourceUrl: "https://barceloindajaus.com/", expandable: true, scrollScrub: true }
          ]
        },
        {
          placement: "afterProcess",
          heading: "Catalog · visual and operational continuity",
          intro: "The catalog shows the migration work most clearly: the commercial structure is preserved, while the new platform makes it possible to maintain and expand the product range from within PrestaShop.",
          layout: "comparison",
          items: [
            { type: "image", src: "Proyectos/BARCELO-INDAJAUS/Catalogo completo Barcelo ANTES wordpresspng.png", width: 1900, height: 3115, alt: "Full Barceló Indajaus catalog on WordPress, before the migration", label: "Previous catalog · WordPress", caption: "The reference grouped products in a paginated grid that defined the visual organization to preserve.", state: "before", expandable: true, scrollScrub: true },
            { type: "image", src: "Proyectos/BARCELO-INDAJAUS/Catalogo completo Barcelo AHORA prestashop.png", width: 1900, height: 5140, alt: "Full Barceló Indajaus catalog built on PrestaShop", label: "Current catalog · PrestaShop", caption: "The migrated catalog keeps the brand’s visual identity and expands the product range within a structure managed from PrestaShop.", state: "live", sourceUrl: "https://barceloindajaus.com/", expandable: true, scrollScrub: true }
          ]
        }
      ]
    },
    "calculadora-ia": {
      index: "04",
      title: "Cost estimate calculator with AI chatbot",
      category: "Personal project",
      status: "Public demo",
      role: "HTML · CSS · JavaScript · AppScript · AI integration",
      color: "#ffad4a",
      summary: "I built an interactive calculator to estimate renovation budgets and integrated an AI chatbot to guide users throughout the process.",
      challenge: "I wanted to build an experience that didn’t rely solely on a traditional form. The calculator organizes the information needed to estimate a budget, and the chatbot adds a conversational layer along the way.",
      participation: "I designed and built the web experience, defined the calculator’s structure, implemented the interaction logic, and connected the AI chatbot within the flow.",
      process: [
        ["Question flow", "I organized the information and broke it into easy-to-follow steps."],
        ["Experience design", "I designed the interface, the states, and the moment the estimate appears."],
        ["Calculation logic", "I implemented the logic that processes the answers and builds an estimate."],
        ["Chatbot integration", "I integrated the AI chatbot into the guided experience."],
        ["Review", "I reviewed the flow, the interaction states, and the responsive behavior."]
      ],
      deliverables: ["Guided question flow", "Calculator interface and states", "Calculation logic", "Integrated AI chatbot", "Responsive web demo"],
      technology: "HTML · CSS · JavaScript · Google Apps Script · AI",
      link: "https://dzionix.com/demo-reformas/index.html",
      linkLabel: "Try the renovation calculator demo",
      introLinkLabel: "View project",
      mediaSections: [
        {
          placement: "afterProcess",
          heading: "Experience walkthrough",
          intro: "Screenshots of the public demo showing the responsive landing page, one state of the interactive flow, and the conversational assistant on mobile. The interaction shown is local and doesn’t submit forms or send data anywhere.",
          layout: "asymmetric",
          items: [
            { type: "image", src: "Proyectos/CALCULADORA-IA/home-desktop.png", width: 1425, height: 891, alt: "Landing screen of the public renovation calculator on desktop", label: "Public landing page · desktop", caption: "Initial view of the public demo on desktop, with no data entered.", expandable: true },
            { type: "image", src: "Proyectos/CALCULADORA-IA/calculator-flow-step-3.png", width: 1425, height: 891, alt: "Finish selection step in the public renovation calculator", label: "Interactive flow · step 3", caption: "Local demo state with Kitchen, 50 m², and the Standard finish selected; nothing was submitted.", expandable: true },
            { type: "image", src: "Proyectos/CALCULADORA-IA/home-mobile.png", width: 375, height: 811, alt: "Renovation chatbot open on the landing screen of the mobile calculator", label: "Chatbot · mobile · start", caption: "The assistant’s initial state on mobile, built into the landing screen and ready to start the conversation.", expandable: true },
            { type: "image", src: "Proyectos/CALCULADORA-IA/home-movil.png", width: 487, height: 922, alt: "Renovation chatbot mid-conversation in the mobile version of the calculator", label: "Chatbot · mobile · conversation", caption: "A guided conversation on mobile with a contextual answer about square meters and finishes; demo data only.", expandable: true }
          ]
        }
      ]
    },
    "crm-dz": {
      index: "02",
      title: "CRM DZ",
      category: "Personal project · Full-stack web app",
      status: "Live · in active development · target: December 2026",
      role: "Next.js · React · TypeScript · Node.js · MySQL  ",
      color: "#9cb89a",
      summary: "I built this CRM for my own use, to bring my clients, their websites, maintenance hours, tickets, and reports together in a single workspace. I already use a first working version, which I keep expanding with weekly updates.",
      challenge: "The challenge was to turn management scattered across conversations, emails, documents, and separate tools into a system with clear rules, defined roles, and data separation between agencies.",
      participation: "I handled domain analysis, data modeling, architecture, front-end and back-end, authentication, role-based permissions, tickets and hours, reports, notifications, and documentation. The app is already live, and the implementation keeps evolving with weekly improvements to the flows, the visual polish, and getting the product ready.",
      process: [
        ["Domain modeling", "I defined entities, relationships, and states for agencies, companies, users, sites, usage, tickets, and reports."],
        ["Permissions and isolation", "I defined what each role can view and edit, and how access to data is restricted."],
        ["Core flows", "I built authentication, onboarding, sites, hours, tickets, requests, notifications, and reports."],
        ["Front-end and back-end", "I organized routes, services, server actions, endpoints, and data persistence."],
        ["Testing and documentation", "I worked with automated tests, technical documentation, and incremental reviews."]
      ],
      deliverables: ["Domain and data model", "App front-end and back-end", "Authentication and role-based permissions", "Site, hours, and ticket flows", "Reports and notifications", "Tests and technical documentation"],
      technology: "Next.js · React · TypeScript · Prisma · MySQL · Auth.js",
      link: "https://crm.dzionix.com/",
      linkLabel: "Visit CRM DZ",
      introLinkLabel: "View project",
      noteLink: { href: "https://crm.dzionix.com/", label: "crm.dzionix.com", ariaLabel: "Visit CRM DZ (opens in a new tab)" },
      note: "CRM DZ is already publicly available at crm.dzionix.com and is updated every week. The project is still in development: the published version works, but the dashboard, visual design, states, and other areas will keep evolving, with the goal of completing the product by the end of 2026. It isn’t presented as a finished scope or a final implementation.",
      mediaSections: [
        {
          placement: "afterChallenge",
          heading: "Dashboard overview",
          intro: "The main screen brings together the agency’s operational status and shows the hierarchy, navigation, and priority shortcuts of the public version.",
          layout: "centered",
          items: [
            { type: "image", src: "Proyectos/CRM DZ/dashboard admin agencia.png", width: 1916, height: 1027, alt: "Agency admin dashboard in CRM DZ with an operational summary and the main navigation", label: "Agency dashboard · public version", caption: "The overview centralizes agency tracking and validates the information hierarchy, which will keep evolving with the weekly updates.", expandable: true }
          ]
        },
        {
          placement: "afterProcess",
          heading: "From personal tracking to issue management",
          intro: "Two complementary views show how the working foundation connects each user’s daily work with shared tracking of requests and tickets.",
          layout: "split",
          items: [
            { type: "image", src: "Proyectos/CRM DZ/mis tareas dashboard admin agencia.png", width: 1910, height: 1037, alt: "My tasks view in the CRM DZ admin dashboard", label: "My tasks · personal tracking", caption: "The personal view brings tasks and priorities together, turning daily activity into visible, organized actions.", expandable: true },
            { type: "image", src: "Proyectos/CRM DZ/sistema de tickets.png", width: 1916, height: 1036, alt: "CRM DZ ticketing system with a list of issues and their tracking", label: "Tickets · shared tracking", caption: "The ticketing system structures issues and their status to keep context across users, companies, and agencies.", expandable: true }
          ]
        }
      ]
    },
    "cms-propio": {
      index: "01",
      title: "CMS AI DZ",
      category: "Personal project · Full-stack web app",
      status: "In development · working core and design · target: January 2027",
      role: "Next.js · React · TypeScript · Node.js · AI integration",
      color: "#9db2d3",
      summary: "I built CMS AI DZ, a system where pages are created mainly through an AI chat and then managed, reviewed, and published from the same dashboard.",
      challenge: "The challenge was to build a CMS where creating a page could start from a chat without losing control over the structure, the quality of the content, or the system’s rules.",
      participation: "I handled content modeling, architecture, the conversational flow, public rendering, the design system, media, forms, the editorial workflow, SEO, authentication, permissions, and documentation.",
      process: [
        ["Content modeling", "I defined entities, relationships, and states for pages, blocks, posts, media, forms, and SEO."],
        ["Editor and rendering", "I built the editor and the public renderer for the stored blocks."],
        ["Rules and permissions", "I separated each role’s responsibilities within the editorial process."],
        ["Design system", "I centralized tokens and components to keep things consistent and reusable."],
        ["Conversational creation", "I added structured generation, validation, and explicit confirmation before saving."],
        ["Hardening", "The core is built; production readiness and some features are still pending."]
      ],
      deliverables: ["Block-based page editor", "Public renderer", "Editorial workflow and permissions", "Design system and reusable components", "Conversational page creation", "Blog, SEO, form, and media management"],
      technology: "Next.js · React · TypeScript · Prisma · MySQL · Supabase Storage · AI",
      link: "https://cms.dzionix.com/",
      linkLabel: "Visit the CMS AI DZ demo",
      introLinkLabel: "View project",
      noteLink: { href: "https://cms.dzionix.com/", label: "cms.dzionix.com", ariaLabel: "Visit the CMS AI DZ demo (opens in a new tab)" },
      note: "CMS AI DZ has a public demo at cms.dzionix.com. The project is still in development: the published version works, but the AI chat, the editor, the design system, and other areas will keep evolving. It isn’t presented as a multi-agency SaaS or as a system that publishes automatically with AI.",
      mediaSections: [
        {
          placement: "afterChallenge",
          heading: "Style guide",
          intro: "Visual rules are stored as tokens, scales, and reusable components, and previewed before they’re applied.",
          layout: "full",
          items: [
            { type: "image", src: "Proyectos/CMS DZ/cms-design-system.png", width: 1536, height: 1024, alt: "Design System area with a site preview in light and dark mode on desktop, tablet, and mobile, plus each color with its contrast", label: "Design system · shared rules", caption: "The brand identity is structured as tokens, scales, and reusable components, with each color’s contrast in plain view.", expandable: true }
          ]
        },
        {
          placement: "afterChallenge",
          heading: "Dashboard and content",
          intro: "So that creating from the chat doesn’t mean giving up control, the dashboard brings together the site’s pages, blog, and SEO status without opening each editor.",
          layout: "lead-split",
          items: [
            { type: "image", src: "Proyectos/CMS DZ/cms-panel-dashboard.png", width: 1536, height: 1024, alt: "CMS AI DZ dashboard with counters for pages, posts, drafts, and storage, plus a site health panel", label: "Dashboard · operational control", caption: "The main view ties content status to site health alerts and shortcuts to the priority work areas.", expandable: true },
            { type: "image", src: "Proyectos/CMS DZ/cms-panel-paginas.png", width: 1536, height: 1024, alt: "Page list showing each page’s title, slug, creation date, and SEO score", label: "Pages and SEO", caption: "Each page shows its slug and SEO score, so you can spot what’s missing at a glance.", expandable: true },
            { type: "image", src: "Proyectos/CMS DZ/cms-blog.png", width: 1536, height: 1024, alt: "Blog management with draft and published posts, their status, and their SEO score", label: "Blog · drafts and published", caption: "The blog separates drafts from published posts and shows each article’s SEO score.", expandable: true }
          ]
        },
        {
          placement: "afterProcess",
          heading: "Page editor",
          intro: "Pages are edited with a human in control: the agent proposes the structure, and the person decides what to save and publish.",
          layout: "full",
          items: [
            { type: "image", src: "Proyectos/CMS DZ/cms-editor-pagina.png", width: 1536, height: 1024, alt: "Page editor with basic information, an AI design panel, and SEO settings", label: "Assisted creation and editing", caption: "The agent proposes a structure inside the editor, while the person stays in control of SEO, preview, and saving.", expandable: true }
          ]
        },
        {
          placement: "afterProcess",
          heading: "From chat to published page",
          intro: "The page starts as a conversation. The agent proposes the structure, and the person decides when to apply it.",
          layout: "full",
          items: [
            { type: "image", src: "Proyectos/CMS DZ/cms-chat-propuesta.png", width: 1536, height: 1024, alt: "Editor chat with a request for an interior design studio’s home page and the agent’s proposal loaded into the editor", label: "Chat · proposal", caption: "The agent turns the description into blocks (hero, services, featured band, and call to action) and loads them into the editor before saving.", expandable: true },
            { type: "image", src: "Proyectos/CMS DZ/cms-chat-resultado.png", width: 1536, height: 1024, alt: "Public home page generated from the chat, with a split hero, three service cards, a featured band, and a call-to-action button", label: "Public result", caption: "The published page keeps the tone requested in the chat and the structure reviewed in the editor.", expandable: true }
          ]
        },
        {
          placement: "afterProcess",
          heading: "Forms within the editorial workflow",
          intro: "Forms are created, published, and reviewed from the same CMS as the pages.",
          layout: "full",
          items: [
            { type: "image", src: "Proyectos/CMS DZ/cms-formularios-listado.png", width: 1536, height: 1024, alt: "Form list with a published Quote request form, its number of submissions, and unread messages", label: "Forms · list", caption: "Each form shows its status, the submissions received, and the messages waiting to be read.", expandable: true },
            { type: "image", src: "Proyectos/CMS DZ/cms-formularios-detalle.png", width: 1536, height: 1024, alt: "Editing the Quote request form, with five fields, their types, and whether they’re required", label: "Forms · fields", caption: "Fields are ordered, given a type, and marked as required on the same screen before publishing.", expandable: true }
          ]
        },
        {
          placement: "afterProcess",
          heading: "A second page created from the chat",
          intro: "The same flow works for other pages. The services page is generated from a single prompt.",
          layout: "full",
          items: [
            { type: "image", src: "Proyectos/CMS DZ/cms-servicios-chat.png", width: 1536, height: 1024, alt: "Editor chat with the request for the services page and the proposal loaded into the editor", label: "Chat · services", caption: "One prompt describes the heading, the paragraph, and the four phases of the process; the agent loads them into the editor.", expandable: true },
            { type: "image", src: "Proyectos/CMS DZ/cms-servicios-resultado.png", width: 1536, height: 1024, alt: "Public interior design services page with four phase cards and a Request a quote button", label: "Public result · services", caption: "The resulting page keeps the requested structure and is ready to review before publishing.", expandable: true }
          ]
        }
      ]
    },
    "movimoney": {
      index: "03",
      title: "MoviMoney",
      category: "Personal project",
      status: "In development · Working core and design",
      role: "React Native · Android app (architecture ready for iOS)",
      color: "#ddd3aa",
      summary: "I built MoviMoney, an Android app to log income and expenses, check your balance, and review your history without relying on a backend.",
      challenge: "The challenge was to build a useful first version without a backend: define a simple model for income and expenses, keep the data on the device, and offer a clear path between the summary, transactions, and categories.",
      participation: "I’m building the project end to end within the current scope: MVP definition, data modeling, navigation, screens, local persistence, and status documentation.",
      process: [
        ["Local scope", "I scoped a first version with no remote accounts, sync, or external services."],
        ["Model and persistence", "I organized transactions, categories, balance rules, and local persistence."],
        ["Access and navigation", "I separated local access and structured the Drawer, the tabs, and the Home, History, and Categories screens."],
        ["Transactions", "I implemented logging, the summary, search, and filters by date and category."],
        ["Status and roadmap", "I documented what works today and what’s outside the MVP."]
      ],
      deliverables: ["Local sign-in and session", "Drawer and Bottom Tabs navigation", "Income and expense logging", "Balance and transaction summary", "History with search and filters", "Category management", "Local persistence and documented migration"],
      technology: "Expo · React Native · TypeScript · AsyncStorage · expo-secure-store",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.dzionix.misgastoslocal&hl=en",
      introLinkLabel: "View on Google Play",
      note: "Data is stored locally on the device. It isn’t a production-ready financial product, and it doesn’t include a backend or sync.",
      mediaSections: [
        {
          placement: "afterProcess",
          heading: "The MVP, from the big picture to day-to-day control",
          intro: "The journey starts at the summary and branches out into navigation, wallets, logging and browsing transactions, analysis, budgets, the calendar, and local settings.",
          layout: "mobile-grid",
          items: [
            { type: "image", src: "Proyectos/MoviMoney/44131.jpg", width: 1280, height: 2772, alt: "MoviMoney home screen with the confirmed balance, the net for the period, and recent transactions", label: "Home · overview", caption: "The home screen brings together the confirmed balance, the projected balance, the net for the period, and recent transactions.", expandable: true },
            { type: "image", src: "Proyectos/MoviMoney/44132.jpg", width: 1280, height: 2772, alt: "MoviMoney drawer with shortcuts to wallets, transactions, categories, budgets, calendar, summary, and settings", label: "Main navigation", caption: "The Drawer organizes access to wallets, transactions, categories, budgets, calendar, summary, and settings.", expandable: true },
            { type: "image", src: "Proyectos/MoviMoney/44135.jpg", width: 1280, height: 2772, alt: "MoviMoney wallets screen with the total balance, the main wallet, and management actions", label: "Wallets · balance sources", caption: "The Wallets section keeps accounts separate and lets you edit or archive them, or set the default wallet.", expandable: true },
            { type: "image", src: "Proyectos/MoviMoney/MoviMoney 1 (2).jpg", width: 1280, height: 2772, alt: "MoviMoney quick-action menu to log a new expense or new income", label: "Quick transaction entry", caption: "The quick-action menu lets you log a new expense or new income without leaving the summary.", expandable: true },
            { type: "image", src: "Proyectos/MoviMoney/MoviMoney 1 (4).jpg", width: 1280, height: 2772, alt: "MoviMoney history with a search bar and an advanced filter panel by category and date range", label: "History · search and filters", caption: "The history lets you search transactions and apply advanced filters by category and date range.", expandable: true },
            { type: "image", src: "Proyectos/MoviMoney/44136.jpg", width: 1280, height: 2772, alt: "MoviMoney summary screen with spending by category, balance trend, and top expenses", label: "Summary · period analysis", caption: "The summary turns transactions into a read on the period: spending by category, balance trend, and top expenses.", expandable: true },
            { type: "image", src: "Proyectos/MoviMoney/44133.jpg", width: 1280, height: 2772, alt: "MoviMoney budgets screen with monthly limits and a status for each category", label: "Budgets · spending control", caption: "The budgets view lets you set monthly limits and see which categories are within budget, close to the limit, or over it.", expandable: true },
            { type: "image", src: "Proyectos/MoviMoney/44134.jpg", width: 1280, height: 2772, alt: "MoviMoney calendar with income, expenses, and the monthly balance", label: "Calendar · monthly planning", caption: "The calendar places income, expenses, and balance on a timeline so you can review how the month is going.", expandable: true },
            { type: "image", src: "Proyectos/MoviMoney/MoviMoney 1 (5).jpg", width: 1280, height: 2772, alt: "MoviMoney settings screen with the local account, security, and starting balance settings", label: "Settings · local configuration", caption: "Settings bring together the local account, sign-in security, and adjusting the starting balance.", expandable: true }
          ]
        }
      ]
    },
    "dream-school": {
      index: "07",
      title: "Dream School",
      category: "Professional project",
      status: "Live",
      role: "Front-end implementation from a prototype",
      color: "#ffd9a3",
      summary: "I turned the Dream School prototype into a working WordPress site with Elementor Pro, with a custom field structure that lets the team update content directly from the dashboard.",
      challenge: "The challenge was to bring the prototype into a real, editable environment: preserve the visual layout it defined and organize the content so the team could update it without technical help.",
      participation: "I set up the content structure with custom fields, built the screens in Elementor Pro, and handled optimization and the mobile version. The visual prototype was provided.",
      process: [
        ["Prototype review", "I reviewed the screens, layout, and hierarchy defined in the prototype."],
        ["Content structure", "I set up the custom fields and flexible content so the site can be edited from the dashboard."],
        ["Implementation", "I built the screens and components in Elementor Pro on WordPress."],
        ["Mobile adaptation", "I adjusted layout, sizing, and spacing for the mobile viewport."],
        ["Review and handoff", "I compared the implementation with the reference and left the content easy for the team to manage."]
      ],
      deliverables: ["Implemented WordPress site", "Custom field structure", "Flexible content editable from the dashboard", "Mobile adaptation and optimization"],
      technology: "WordPress · Elementor Pro · ACF · CPT",
      link: "https://dreamschool.es/",
      linkLabel: "Visit the Dream School website",
      introLinkLabel: "View project",
      mediaSections: [
        {
          placement: "afterChallenge",
          heading: "Reference design",
          intro: "The prototype defined the site’s visual direction and structure before implementation.",
          layout: "full",
          items: [
            { type: "image", src: "Proyectos Secundarios/Dream School/XD Design 1.png", width: 1282, height: 963, alt: "First screen of the Dream School prototype in Adobe XD", label: "Prototype · Adobe XD", caption: "First view of the prototype with the proposed visual direction.", expandable: true },
            { type: "image", src: "Proyectos Secundarios/Dream School/XD Design 2.png", width: 1872, height: 886, alt: "Second screen of the Dream School prototype in Adobe XD", label: "Prototype · Adobe XD", caption: "A complementary view of the prototype showing the content structure.", expandable: true }
          ]
        },
        {
          placement: "afterProcess",
          heading: "Live implementation",
          intro: "The main pages built on the live site, ready to explore in the viewer.",
          layout: "comparison",
          items: [
            { type: "image", src: "Proyectos Secundarios/Dream School/web-publica-home.optimized.jpg", width: 1920, height: 4863, alt: "Full live Dream School home page on desktop", label: "Home · desktop", caption: "Full screenshot of the implemented home page, ready to explore in the viewer.", state: "live", sourceUrl: "https://dreamschool.es/", expandable: true, scrollScrub: true },
            { type: "image", src: "Proyectos Secundarios/Dream School/web-publica-cursos.optimized.jpg", width: 1920, height: 10212, alt: "Full live Dream School courses page on desktop", label: "Courses · desktop", caption: "Full screenshot of the courses page, with the entire course catalog expanded.", state: "live", sourceUrl: "https://dreamschool.es/", expandable: true, scrollScrub: true }
          ]
        }
      ]
    },
    "preventing-treating": {
      index: "06",
      title: "Preventing / Treating With Experts",
      category: "Professional project",
      status: "Two live sites",
      role: "Front-end implementation · From Figma to WordPress",
      color: "#dbe7ff",
      summary: "I built two sister websites for healthcare professionals in WordPress from their Figma designs: Preventing With Experts and Treating With Experts, each with its own visual identity.",
      challenge: "Building two distinct sites from two different designs, staying faithful to each reference while keeping the implementation consistent and responsive in both cases.",
      participation: "I turned the Figma designs into working WordPress sites, built the home and inner pages, and reviewed the implementation on desktop and mobile. The designs were provided.",
      process: [
        ["Design review", "I reviewed the screens, layout, and visual rules for both sites in Figma."],
        ["Structure setup", "I organized the pages and sections so everything stays editable in WordPress."],
        ["Implementation", "I built the home and inner pages for both sites."],
        ["Responsive adaptation", "I adjusted layout and navigation for desktop and mobile."],
        ["Visual review", "I compared each implementation with its design and fixed the differences I found."]
      ],
      deliverables: ["Two implemented WordPress sites", "Home and inner pages", "Responsive adaptation", "Review against the Figma designs"],
      technology: "WordPress · Elementor · Responsive",
      link: "https://preventingwithexperts.com/",
      linkLabel: "Visit Preventing With Experts",
      introLinkLabel: "View project",
      mediaSections: [
        {
          placement: "afterChallenge",
          heading: "Figma reference designs",
          intro: "The two designs defined different identities for sister sites: Preventing, about acting before a problem appears, and Treating, about providing support once it’s already there.",
          layout: "comparison",
          items: [
            { type: "image", src: "Proyectos Secundarios/Preventing - Treating/Figma Preventing with expert 1.png", width: 1912, height: 1082, alt: "Figma design for the Preventing With Experts website", label: "Figma · Preventing", caption: "Visual direction and structure of the site focused on prevention.", expandable: true },
            { type: "image", src: "Proyectos Secundarios/Preventing - Treating/Figma Treating with expert 1.png", width: 1910, height: 1062, alt: "Figma design for the Treating With Experts website", label: "Figma · Treating", caption: "Visual direction and structure of the site focused on treatment.", expandable: true }
          ]
        },
        {
          placement: "afterProcess",
          heading: "Live implementation · desktop",
          intro: "Both published home pages preserve the identity and hierarchy of each site.",
          layout: "comparison",
          items: [
            { type: "image", src: "Proyectos Secundarios/Preventing - Treating/web-publica-preventing-home.optimized.jpg", width: 1920, height: 2935, alt: "Full live Preventing With Experts home page on desktop", label: "Home · Preventing", caption: "Full screenshot of the live Preventing site on desktop, ready to explore in the viewer.", state: "live", sourceUrl: "https://preventingwithexperts.com/", expandable: true, scrollScrub: true },
            { type: "image", src: "Proyectos Secundarios/Preventing - Treating/web-publica-treating-home.optimized.jpg", width: 1920, height: 2592, alt: "Full live Treating With Experts home page on desktop", label: "Home · Treating", caption: "Full screenshot of the live Treating site on desktop, ready to explore in the viewer.", state: "live", sourceUrl: "https://treatingwithexperts.com/", expandable: true, scrollScrub: true }
          ]
        },
        {
          placement: "afterProcess",
          heading: "Live implementation · mobile",
          intro: "Responsive behavior was handled for each site, adapting layout, navigation, and scale to the mobile viewport.",
          layout: "comparison",
          items: [
            { type: "image", src: "Proyectos Secundarios/Preventing - Treating/web-publica-preventing-home-movil.optimized.webp", width: 500, height: 4275, alt: "Full live Preventing With Experts home page on mobile", label: "Home · Preventing · mobile", caption: "Full screenshot of the live Preventing site on mobile.", state: "live", sourceUrl: "https://preventingwithexperts.com/", expandable: true, scrollScrub: true, scrubViewport: "9 / 16" },
            { type: "image", src: "Proyectos Secundarios/Preventing - Treating/web-publica-treating-home-movil.optimized.webp", width: 500, height: 4243, alt: "Full live Treating With Experts home page on mobile", label: "Home · Treating · mobile", caption: "Full screenshot of the live Treating site on mobile.", state: "live", sourceUrl: "https://treatingwithexperts.com/", expandable: true, scrollScrub: true, scrubViewport: "9 / 16" }
          ]
        },
        {
          placement: "afterProcess",
          heading: "Inner pages",
          intro: "The inner pages reproduce each site’s content structure while keeping its own identity.",
          layout: "comparison",
          items: [
            { type: "image", src: "Proyectos Secundarios/Preventing - Treating/web-publica-preventing-pagina-interna.optimized.jpg", width: 1907, height: 1080, alt: "Live inner page of Preventing With Experts", label: "Inner page · Preventing", caption: "Content structure of a Preventing inner page.", state: "live", sourceUrl: "https://preventingwithexperts.com/", expandable: true },
            { type: "image", src: "Proyectos Secundarios/Preventing - Treating/web-publica-treating-pagina-interna.optimized.jpg", width: 1912, height: 1087, alt: "Live inner page of Treating With Experts", label: "Inner page · Treating", caption: "Content structure of a Treating inner page.", state: "live", sourceUrl: "https://treatingwithexperts.com/", expandable: true }
          ]
        }
      ]
    },
    "barentszen": {
      index: "05",
      title: "Barentszen / Barentszen Group",
      category: "Professional project",
      status: "Two live sites",
      role: "Front-end implementation · From Figma to WordPress",
      color: "#e7e0d0",
      summary: "I turned Barentszen Group’s Figma design into a WordPress site with a custom field structure so content can be updated directly from the dashboard, published in two languages: Dutch and English.",
      challenge: "Bringing the finished design into an editable WordPress site, preserving the visual layout and organizing the content so the team can manage it without technical help.",
      participation: "I set up the content structure, built the screens, configured both languages, and handled the responsive behavior based on the provided design.",
      process: [
        ["Design review", "I reviewed the screens, layout, and visual rules defined in Figma."],
        ["Content structure", "I set up the custom fields and flexible content so the site can be edited from the dashboard."],
        ["Implementation", "I built the screens and components on WordPress."],
        ["Multilingual setup", "I set up the site in two languages, Dutch and English, with WPML."],
        ["Responsive adaptation", "I adjusted layout and spacing for different screen sizes."],
        ["Review and handoff", "I compared the implementation with the reference and left the content easy for the team to manage."]
      ],
      deliverables: ["Implemented WordPress site", "Custom field structure", "Flexible content editable from the dashboard", "Bilingual site · Dutch and English", "Responsive adaptation"],
      technology: "WordPress · Elementor · ACF · CPT · WPML",
      link: "https://barentszen.nl/",
      linkLabel: "Visit the Barentszen website",
      introLinkLabel: "View project",
      mediaSections: [
        {
          placement: "afterChallenge",
          heading: "Figma reference designs",
          intro: "The project brought together two brands within the same group, Barentszen and Barentszen Group, each with its own visual direction.",
          layout: "lead-split",
          items: [
            { type: "image", aspect: "16 / 9", alt: "Temporary placeholder for Barentszen’s visual references", label: "Temporary visual sample · Barentszen", caption: "The Figma reference images are temporarily hidden. The original design was created by the Selva Digital team." }
          ]
        },
        {
          placement: "afterChallenge",
          heading: "Additional design views",
          intro: "Additional views of the designs that complete the reference before implementation.",
          layout: "full",
          items: [
            { type: "image", aspect: "16 / 9", alt: "Temporary placeholder for Barentszen Group’s visual references", label: "Temporary visual sample · Barentszen Group", caption: "The Figma reference images are temporarily hidden. The original design was created by the Selva Digital team." }
          ]
        },
        {
          placement: "afterProcess",
          heading: "Live implementation · desktop",
          intro: "Both home pages as built for desktop, ready to explore in the viewer.",
          layout: "comparison",
          items: [
            { type: "image", src: "Proyectos Secundarios/Barentszen - B. Group/web-publica-barentszen-1.optimized.jpg", width: 1920, height: 10235, alt: "Full Barentszen home page as built for desktop", label: "Home · Barentszen · desktop", caption: "Full screenshot of the Barentszen site on desktop, ready to explore in the viewer.", state: "live", sourceUrl: "https://barentszen.nl/", expandable: true, scrollScrub: true },
            { type: "image", src: "Proyectos Secundarios/Barentszen - B. Group/web-publica-barentszen-group-1.optimized.jpg", width: 1920, height: 8880, alt: "Full Barentszen Group home page as built for desktop", label: "Home · Barentszen Group · desktop", caption: "Full screenshot of the Barentszen Group site on desktop, ready to explore in the viewer.", state: "live", sourceUrl: "https://barentszengroup.nl/", expandable: true, scrollScrub: true }
          ]
        },
        {
          placement: "afterProcess",
          heading: "Live implementation · mobile",
          intro: "Responsive behavior was handled for each brand, adapting layout and scale to the mobile viewport.",
          layout: "comparison",
          items: [
            { type: "image", src: "Proyectos Secundarios/Barentszen - B. Group/web-publica-movil-barentszen-1.optimized.webp", width: 400, height: 11212, alt: "Full Barentszen home page as built for mobile", label: "Home · Barentszen · mobile", caption: "Full screenshot of the Barentszen site on mobile.", state: "live", sourceUrl: "https://barentszen.nl/", expandable: true, scrollScrub: true, scrubViewport: "9 / 16" },
            { type: "image", src: "Proyectos Secundarios/Barentszen - B. Group/web-publica-barentszen-group-movil-1.optimized.webp", width: 400, height: 8432, alt: "Full Barentszen Group home page as built for mobile", label: "Home · Barentszen Group · mobile", caption: "Full screenshot of the Barentszen Group site on mobile.", state: "live", sourceUrl: "https://barentszengroup.nl/", expandable: true, scrollScrub: true, scrubViewport: "9 / 16" }
          ]
        }
      ]
    }
  }
};
