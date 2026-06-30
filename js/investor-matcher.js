// AI Investor Matcher - Recommends properties based on investor profile
// Scoring algorithm considers investment size, ROI, horizon, risk tolerance, and preferences

// El Dorado Properties Database
const PROPERTIES = [
    {
        id: "DT-001",
        name: "Downtown Plaza Mixed-Use",
        zone: "C-1",
        district: "downtown",
        types: ["commercial", "residential"],
        industries: ["ag"],
        size: 12000,
        price: 2.4,
        roi: 25,
        horizon: "3-7",
        riskLevel: "moderate",
        description: "Prime downtown mixed-use development. Retail, office, residential mixed-use. Strong foot traffic, established utilities.",
        highlights: ["Prime location", "Diverse revenue streams", "Walkable downtown"],
        link: "development-finder.html#dt-001"
    },
    {
        id: "SI-001",
        name: "South Industrial Hub",
        zone: "I-1",
        district: "south",
        types: ["industrial"],
        industries: ["logistics", "energy"],
        size: 45000,
        price: 8.5,
        roi: 20,
        horizon: "3-7",
        riskLevel: "moderate",
        description: "Large-scale industrial parcel in south corridor. Perfect for logistics, manufacturing, or distribution. Direct I-35 access, rail siding available.",
        highlights: ["Rail access", "Interstate proximity", "Established logistics corridor"],
        link: "development-finder.html#si-001"
    },
    {
        id: "NG-001",
        name: "North Gateway Residential",
        zone: "R-1",
        district: "north",
        types: ["residential"],
        industries: ["ag"],
        size: 18000,
        price: 3.2,
        roi: 18,
        horizon: "3-7",
        riskLevel: "conservative",
        description: "Multi-family residential opportunity in growing north gateway. Close to schools, amenities, and employment centers. Zoned for up to 120 units.",
        highlights: ["Family-friendly", "Growing demographic", "Schools nearby"],
        link: "development-finder.html#ng-001"
    },
    {
        id: "LS-001",
        name: "Lakeside Recreation Complex",
        zone: "PUD",
        district: "lakeside",
        types: ["hospitality", "commercial"],
        industries: ["aerospace"],
        size: 25000,
        price: 15.0,
        roi: 28,
        horizon: "3-7",
        riskLevel: "aggressive",
        description: "Premium lakeside mixed-use development. Hotel, restaurant, retail, and recreation facilities. High amenity value, strong tourism draw.",
        highlights: ["Tourism anchor", "Premium amenities", "Destination asset"],
        link: "development-finder.html#ls-001"
    },
    {
        id: "DC-001",
        name: "Project Horizon Data Center",
        zone: "I-1",
        district: "east",
        types: ["infrastructure"],
        industries: ["energy", "aerospace"],
        size: 80000,
        price: 45.0,
        roi: 22,
        horizon: "7-15",
        riskLevel: "moderate",
        description: "Hyperscale data center hub supporting cloud computing, AI, and advanced technology infrastructure. Long-term lease potential.",
        highlights: ["High-tech", "Long-term contracts", "Stable cash flow"],
        link: "development-finder.html#dc-001"
    },
    {
        id: "SI-002",
        name: "South Industrial Expansion",
        zone: "I-1",
        district: "south",
        types: ["industrial"],
        industries: ["logistics", "energy"],
        size: 60000,
        price: 12.0,
        roi: 21,
        horizon: "3-7",
        riskLevel: "moderate",
        description: "Major expansion site in south industrial corridor. Suitable for large-scale distribution, manufacturing, or logistics operations. Exceptional rail and highway access.",
        highlights: ["Rail connection", "Highway access", "Bulk logistics"],
        link: "development-finder.html#si-002"
    },
    {
        id: "BIO-001",
        name: "Biotech Research Park",
        zone: "PUD",
        district: "north",
        types: ["commercial"],
        industries: ["biotech", "ag"],
        size: 35000,
        price: 7.0,
        roi: 26,
        horizon: "7-15",
        riskLevel: "aggressive",
        description: "Modern research and development facility for biotech, agrigenomics, and life sciences companies. State-of-the-art laboratory infrastructure.",
        highlights: ["R&D focused", "Tech ecosystem", "Growth potential"],
        link: "development-finder.html#bio-001"
    },
    {
        id: "AE-001",
        name: "Advanced Manufacturing Hub",
        zone: "I-1",
        district: "south",
        types: ["industrial"],
        industries: ["aerospace", "energy"],
        size: 50000,
        price: 10.0,
        roi: 24,
        horizon: "3-7",
        riskLevel: "moderate",
        description: "Precision manufacturing facility for aerospace components, advanced electronics, and defense contractors. High-skill workforce corridor.",
        highlights: ["Defense contracts", "Skilled workforce", "Supply chain"],
        link: "development-finder.html#ae-001"
    }
];

// Scoring algorithm
function calculateMatchScore(property, investorProfile) {
    let score = 0;
    let details = [];

    // 1. Investment Size Match (20 points max)
    const sizeMatch = investorProfile.investmentSize / property.price;
    if (sizeMatch >= 0.8) {
        score += 20;
        details.push("✅ Investment size matches perfectly");
    } else if (sizeMatch >= 0.5) {
        score += 15;
        details.push("✅ Investment size is suitable");
    } else if (sizeMatch >= 0.25) {
        score += 10;
        details.push("⚠️ Will require partnerships");
    } else {
        score += 5;
        details.push("⚠️ Significant capital needed");
    }

    // 2. ROI Target Match (20 points max)
    const roiDiff = Math.abs(property.roi - investorProfile.roiTarget);
    if (roiDiff <= 5) {
        score += 20;
        details.push("✅ ROI expectations aligned");
    } else if (roiDiff <= 10) {
        score += 15;
        details.push("✅ ROI within acceptable range");
    } else if (roiDiff <= 15) {
        score += 10;
        details.push("⚠️ ROI below expectations");
    } else {
        score += 5;
        details.push("⚠️ ROI significantly different");
    }

    // 3. Investment Horizon Match (15 points max)
    if (property.horizon === investorProfile.horizon) {
        score += 15;
        details.push("✅ Timeline aligns perfectly");
    } else if ((investorProfile.horizon === "3-7" && property.horizon === "1-3") ||
               (investorProfile.horizon === "3-7" && property.horizon === "7-15")) {
        score += 10;
        details.push("✅ Timeline compatible");
    } else {
        score += 5;
        details.push("⚠️ Timeline requires adjustment");
    }

    // 4. Risk Level Match (15 points max)
    if (property.riskLevel === investorProfile.riskTolerance) {
        score += 15;
        details.push("✅ Risk profile matches");
    } else if ((investorProfile.riskTolerance === "moderate" && (property.riskLevel === "conservative" || property.riskLevel === "aggressive")) ||
               (investorProfile.riskTolerance === "conservative" && property.riskLevel === "moderate")) {
        score += 10;
        details.push("✅ Risk acceptable");
    } else {
        score += 5;
        details.push("⚠️ Risk mismatch");
    }

    // 5. Preferences Match (30 points max)
    let prefsMatched = 0;

    // Property type match
    const typeMatches = property.types.filter(t => investorProfile.propertyTypes.includes(t)).length;
    if (typeMatches > 0) {
        prefsMatched += typeMatches * 5;
    }

    // Industry match
    const industryMatches = property.industries.filter(i => investorProfile.industries.includes(i)).length;
    if (industryMatches > 0) {
        prefsMatched += industryMatches * 5;
    }

    score += Math.min(prefsMatched, 30);

    if (prefsMatched > 10) {
        details.push("✅ Aligned with preferences");
    } else if (prefsMatches > 0) {
        details.push("⚠️ Partial preference match");
    } else {
        details.push("⚠️ Outside preference area");
    }

    return { score: Math.min(score, 100), details };
}

// Get investor profile from form
function getInvestorProfile() {
    return {
        name: document.getElementById("investorName").value || "Investor",
        email: document.getElementById("investorEmail").value,
        investmentSize: parseInt(document.getElementById("investmentSize").value),
        horizon: document.getElementById("horizon").value,
        roiTarget: parseInt(document.getElementById("roiTarget").value),
        experience: document.getElementById("experience").value,
        propertyTypes: [
            "commercial", "industrial", "residential", "hospitality", "infrastructure"
        ].filter(type => document.getElementById(type)?.checked),
        industries: [
            "ag", "logistics", "energy", "biotech", "aerospace"
        ].filter(ind => document.getElementById(ind)?.checked),
        riskTolerance: document.getElementById("riskTolerance").value
    };
}

// Find matching properties
function findMatches() {
    const profile = getInvestorProfile();

    // Validation
    if (!profile.email) {
        alert("Please enter your email to continue");
        return;
    }

    if (profile.propertyTypes.length === 0 || profile.industries.length === 0) {
        alert("Please select at least one property type and one industry");
        return;
    }

    // Score all properties
    const scored = PROPERTIES.map(prop => {
        const { score, details } = calculateMatchScore(prop, profile);
        return { property: prop, score, details };
    });

    // Sort by score (highest first)
    scored.sort((a, b) => b.score - a.score);

    // Display results
    displayMatches(scored, profile);
}

// Display match results
function displayMatches(matches, profile) {
    const container = document.getElementById("matchesContainer");
    container.innerHTML = "";

    if (matches.length === 0) {
        container.innerHTML = '<div class="no-results">No properties match your criteria. Try adjusting your preferences.</div>';
        document.getElementById("resultsPanel").classList.add("active");
        return;
    }

    // Show top matches
    matches.slice(0, 5).forEach((match, index) => {
        const prop = match.property;
        const score = match.score;
        const qualityLabel = score >= 80 ? "Excellent" : score >= 60 ? "Good" : "Fair";

        const card = document.createElement("div");
        card.className = "match-card";
        card.innerHTML = `
            <div class="match-card-header">
                <div class="match-title">${index + 1}. ${prop.name}</div>
                <div class="match-score">${score}/100 ${qualityLabel}</div>
            </div>

            <div class="match-details">
                <div class="detail-item">
                    <div class="detail-label">Investment Required</div>
                    <div class="detail-value">$${prop.price}M</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Expected ROI</div>
                    <div class="detail-value">${prop.roi}%</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Time Horizon</div>
                    <div class="detail-value">${prop.horizon}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Zone</div>
                    <div class="detail-value">${prop.zone}</div>
                </div>
            </div>

            <div class="match-description">${prop.description}</div>

            <div style="font-size: 12px; color: #a0a0a0; margin: 8px 0;">
                <strong>Why this match:</strong><br>
                ${match.details.slice(0, 3).join("<br>")}
            </div>

            <div style="font-size: 12px; color: #666; margin: 8px 0;">
                Highlights: ${prop.highlights.join(" • ")}
            </div>

            <div class="match-actions">
                <a href="${prop.link}" class="match-btn">📊 View Details</a>
                <button class="match-btn" onclick="contactAbout('${prop.name}', '${profile.email}')">📧 Inquire</button>
            </div>
        `;
        container.appendChild(card);
    });

    document.getElementById("resultsPanel").classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// Contact about property
function contactAbout(propertyName, email) {
    const subject = `Investment Inquiry: ${propertyName}`;
    const body = `I am interested in learning more about the ${propertyName} development opportunity in El Dorado.`;
    window.location.href = `mailto:invest@eldoradoks.org?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

// Hide results
function hideResults() {
    document.getElementById("resultsPanel").classList.remove("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// Reset form
function resetForm() {
    document.querySelectorAll("input, select").forEach(el => {
        if (el.type === "checkbox") {
            el.checked = el.id !== "commercial" && el.id !== "industrial" &&
                         el.id !== "residential" && el.id !== "ag" && el.id !== "logistics";
        } else if (el.type === "range") {
            el.value = el.id === "investmentSize" ? 10 : 20;
        } else if (el.tagName === "SELECT") {
            el.value = el.id === "horizon" ? "3-7" : el.id === "experience" ? "intermediate" : "moderate";
        } else {
            el.value = "";
        }
    });

    document.getElementById("investmentValue").textContent = "10";
    document.getElementById("roiValue").textContent = "20";
    document.getElementById("resultsPanel").classList.remove("active");
}

// Update slider display values
document.addEventListener("DOMContentLoaded", () => {
    const investmentSlider = document.getElementById("investmentSize");
    const roiSlider = document.getElementById("roiTarget");

    if (investmentSlider) {
        investmentSlider.addEventListener("input", () => {
            document.getElementById("investmentValue").textContent = investmentSlider.value;
        });
    }

    if (roiSlider) {
        roiSlider.addEventListener("input", () => {
            document.getElementById("roiValue").textContent = roiSlider.value;
        });
    }
});
