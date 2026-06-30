// AI Support Chatbot - Knowledge base driven FAQ responses
// Pattern matching for common investor questions

// Knowledge Base - AI Responses
const KNOWLEDGE_BASE = [
    {
        patterns: ["investment", "opportunity", "development", "property"],
        responses: [
            "We have 16+ active development opportunities across El Dorado. Our top areas are:\n\n💼 Commercial: Downtown mixed-use, retail (22-28% ROI)\n🏭 Industrial: South corridor logistics hub (18-24% ROI)\n🏘️ Residential: North gateway multi-family (16-20% ROI)\n💧 Lakeside: Premium recreation complex (24-30% ROI)\n🖥️ Data Center: Project Horizon (22% ROI, 7-15 yr horizon)\n\nWould you like details on any of these?",
            "Top 3 opportunities based on activity:\n1. **South Industrial Corridor** - $75M in projects, direct I-35 access\n2. **Downtown TIF District** - Revitalization with 30% completed\n3. **Lakeside Recreation** - $180M project, opening 2027\n\nVisit our Development Finder for detailed analysis."
        ]
    },
    {
        patterns: ["toolkit", "tools", "resources", "finder"],
        responses: [
            "Our 4-tool Investor Toolkit includes:\n\n🔍 **Development Finder** - 16 properties with ROI calculator\n💼 **Investor Portal** - FAQ, testimonials, risk assessment\n📊 **Project Tracker** - Real-time tracking of 12 active projects\n🎮 **Advanced Visualization** - 3D, AR, and satellite timeline views\n\nAll tools cross-link for seamless discovery.",
            "Start with our **AI Investor Matching** tool to find properties aligned with your profile. Then explore detailed analysis in the Development Finder."
        ]
    },
    {
        patterns: ["roi", "return", "yield", "profit"],
        responses: [
            "El Dorado's expected ROI ranges by property type:\n\n✅ Commercial: 20-28% (3-7 year horizon)\n✅ Industrial: 18-24% (3-7 year horizon)\n✅ Residential: 16-20% (3-7 year horizon)\n✅ Premium (Lakeside): 24-30% (3-7 year horizon)\n✅ Data Center: 22% (7-15 year horizon)\n\nAll returns backed by $75M in deployed capital and fiscal incentives.",
            "Our AI Investor Matching tool will identify properties matching your target ROI. We typically beat regional benchmarks by 15-20%."
        ]
    },
    {
        patterns: ["industries", "sector", "agriculture", "logistics", "aerospace", "biotech"],
        responses: [
            "Our 5 targeted industry clusters:\n\n🌾 **Precision Agriculture** - Agrigenomics, advanced farming\n📦 **Logistics & Supply Chain** - Cold chain, distribution hubs\n✈️ **Aerospace & Defense** - Manufacturing, supply chain\n🧬 **Biotech & Life Sciences** - Research, development facilities\n💧 **Water Advantage Moat** - Competitive advantage in food processing\n\nEach sector has dedicated development zones and incentives.",
            "El Dorado is positioned as a **Tier-1 growth hub** for food processing, logistics, and advanced manufacturing in the region."
        ]
    },
    {
        patterns: ["risk", "safety", "mitigation", "insurance"],
        responses: [
            "We've built risk mitigation into every project:\n\n✅ **Market Risk**: Diversity across 5 industries\n✅ **Geographic Risk**: I-35 corridor location, regional strategic importance\n✅ **Regulatory Risk**: Strong city-county cooperation\n✅ **Financial Risk**: Proven fiscal incentives and tax increment financing\n✅ **Execution Risk**: Experienced project management, clear timeline\n\nOur Investor Portal includes full risk assessment for each property.",
            "El Dorado's risk profile is **MODERATE** - balanced growth with established infrastructure and strong municipal support."
        ]
    },
    {
        patterns: ["timeline", "horizon", "years", "15-year", "long-term"],
        responses: [
            "El Dorado Vision 2040 unfolds in 3 phases:\n\n📅 **Years 1-3 (2024-2027)**: Foundation - Infrastructure, land prep, early projects\n📅 **Years 3-7 (2027-2031)**: Growth - Major projects, workforce development\n📅 **Years 7-15 (2031-2040)**: Maturity - $318-402M invested, full ecosystem\n\nMost investor opportunities are in the Growth phase (3-7 years).",
            "Short-term opportunities (1-3 yrs): Data center, downtown revitalization\nMedium-term (3-7 yrs): Lakeside complex, industrial expansion\nLong-term (7-15 yrs): North gateway residential, strategic initiatives"
        ]
    },
    {
        patterns: ["financing", "capital", "funding", "money", "investment size"],
        responses: [
            "Investment sizing guidance:\n\n💰 **$1-5M**: Ideal for early-stage commercial, small industrial lots\n💰 **$5-15M**: Optimal for multi-property portfolios, mid-size industrial\n💰 **$15-50M**: Large institutional plays - data centers, lakeside resort\n💰 **$50M+**: Anchor tenant opportunities, major development zones\n\nWe accommodate partnerships and syndication for larger deals.",
            "Total Vision 2040 capital target: $318-402M over 15 years. Current deployment: $75M with strong momentum."
        ]
    },
    {
        patterns: ["tax", "incentive", "fiscal", "benefit", "subsidy"],
        responses: [
            "El Dorado offers comprehensive fiscal incentives:\n\n✅ **Tax Increment Financing (TIF)** - Downtown district\n✅ **Free Trade Zone (FTZ)** - 1,131-acre mega-site\n✅ **Industrial Revenue Bonds** - Low-cost financing\n✅ **Sales Tax Rebates** - New business attraction\n✅ **Real Estate Tax Abatement** - Phase-in programs\n✅ **Job Creation Incentives** - Per-job bonuses for employers\n\nTypical incentive package saves 15-25% on project costs.",
            "Example: A $10M industrial project could receive $2-2.5M in fiscal support through combined incentive programs."
        ]
    },
    {
        patterns: ["location", "access", "highway", "i-35", "wichita", "kansas"],
        responses: [
            "Strategic location advantages:\n\n📍 **I-35 Corridor** - Major north-south commercial highway\n📍 **29 miles east of Wichita** - Metro market with $150B+ economy\n📍 **Rail Connections** - Established rail siding for logistics\n📍 **Airport Access** - 35 min to Wichita Dwight D. Eisenhower Airport\n📍 **Regional Hub** - Butler County's largest city\n\nEl Dorado is the **optimal logistics hub** for the Kansas-Oklahoma region.",
            "We're positioned on the emerging **US-77 Logistics Corridor** connecting Denver to the Gulf, with $50-80M regional growth opportunity."
        ]
    },
    {
        patterns: ["contact", "inquiry", "inquire", "meeting", "call", "email"],
        responses: [
            "Ready to explore opportunities?\n\n📧 **Email**: invest@eldoradoks.org\n📱 **Phone**: (620) 321-5150\n📅 **Schedule a meeting**: Click 'Inquire' on any property\n🤖 **AI Matching**: Use our Investor Matching tool to find your ideal properties\n\nWe respond to all inquiries within 24 hours.",
            "Recommended next steps:\n1. Try our AI Investor Matching tool\n2. Browse Development Finder for detailed analysis\n3. Email us with your investment criteria\n4. Schedule a property tour or video call\n\nWhat specific area interests you most?"
        ]
    },
    {
        patterns: ["workforce", "jobs", "employment", "training", "skills"],
        responses: [
            "El Dorado's workforce development strategy:\n\n👷 **CDL Training Program** - 50+ positions/year in logistics\n👷 **Aerospace Training** - Manufacturing certifications\n🎓 **USD 490 Partnership** - High school vocational programs\n🏭 **On-the-job Training** - $2,500-5,000 per employee incentives\n\nProjected job creation: 1,500-2,400 by 2040",
            "Regional talent pool includes:\n✅ 12,694 residents in El Dorado\n✅ 150,000+ in wider Butler County\n✅ 400,000+ in Wichita metro\n✅ Proven logistics & manufacturing workforce"
        ]
    },
    {
        patterns: ["lake", "recreation", "tourism", "amenity"],
        responses: [
            "El Dorado Lake is a key development driver:\n\n💧 **Lakeside Recreation Complex** - $180M resort development\n🏨 **Hotel & Conference Center** - 200+ room capacity\n🍽️ **Restaurant District** - Fine dining, casual options\n⛵ **Water Sports Facilities** - Marina, boat rentals, rentals\n🏌️ **Championship Golf** - 18-hole course planned\n\nLakefront development adds $30-50M annual economic impact.",
            "Tourism strategy targets:\n✅ Regional destination status (drive-market focus)\n✅ Conference center revenue\n✅ Seasonal recreation draw\n✅ Quality-of-life anchor for residential growth"
        ]
    },
    {
        patterns: ["hello", "hi", "hey", "greetings"],
        responses: [
            "Hello! 👋 I'm the El Dorado Support AI. I can help you with:\n\n✅ Investment opportunities\n✅ Expected ROI and timelines\n✅ Industry focus areas\n✅ Fiscal incentives\n✅ Location advantages\n✅ Workforce development\n\nWhat would you like to know?",
            "Welcome to El Dorado Vision 2040! Ask me anything about our development opportunities, and I'll provide detailed guidance."
        ]
    },
    {
        patterns: ["thank", "thanks", "appreciate", "grateful"],
        responses: [
            "You're welcome! Feel free to ask any other questions about El Dorado Vision 2040. We're here to help! 😊",
            "Happy to help! Don't hesitate to reach out if you have more questions about investing in El Dorado."
        ]
    }
];

// Function to find matching response
function findResponse(message) {
    const lowerMessage = message.toLowerCase();

    for (const item of KNOWLEDGE_BASE) {
        for (const pattern of item.patterns) {
            if (lowerMessage.includes(pattern.toLowerCase())) {
                const responses = item.responses;
                return responses[Math.floor(Math.random() * responses.length)];
            }
        }
    }

    // Default response
    return "That's a great question! For detailed information, I'd recommend:\n\n1. Visit our **Development Finder** for property details\n2. Use **AI Investor Matching** to find ideal opportunities\n3. Check our **Investor Portal** for FAQs\n4. Email invest@eldoradoks.org for specific inquiries\n\nWhat specific area interests you?";
}

// Send message
function sendMessage(customMessage = null) {
    const input = document.getElementById("messageInput");
    const message = customMessage || input.value.trim();

    if (!message) return;

    // Add user message
    addMessage(message, "user");
    input.value = "";

    // Show typing indicator
    addTypingIndicator();

    // Simulate processing delay
    setTimeout(() => {
        removeTypingIndicator();
        const response = findResponse(message);
        addMessage(response, "bot");
    }, 600);
}

// Add message to chat
function addMessage(text, sender) {
    const container = document.getElementById("chatMessages");
    const messageDiv = document.createElement("div");
    messageDiv.className = `message ${sender}`;

    const content = document.createElement("div");
    content.className = "message-content";

    // Convert newlines to line breaks
    const lines = text.split("\n");
    lines.forEach((line, index) => {
        content.appendChild(document.createTextNode(line));
        if (index < lines.length - 1) {
            content.appendChild(document.createElement("br"));
        }
    });

    messageDiv.appendChild(content);
    container.appendChild(messageDiv);
    container.scrollTop = container.scrollHeight;
}

// Add typing indicator
function addTypingIndicator() {
    const container = document.getElementById("chatMessages");
    const messageDiv = document.createElement("div");
    messageDiv.className = "message bot";
    messageDiv.id = "typing-indicator";

    const indicator = document.createElement("div");
    indicator.className = "typing-indicator";
    indicator.innerHTML = '<div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div>';

    messageDiv.appendChild(indicator);
    container.appendChild(messageDiv);
    container.scrollTop = container.scrollHeight;
}

// Remove typing indicator
function removeTypingIndicator() {
    const indicator = document.getElementById("typing-indicator");
    if (indicator) indicator.remove();
}

// Handle enter key
function handleKeyPress(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}

// Focus input on load
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("messageInput").focus();
});
