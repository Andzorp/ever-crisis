document.addEventListener('DOMContentLoaded', function () {
    const characterTabs = document.querySelectorAll('.tab-button');
    const weaponSection = document.getElementById('weapons-container');
    const characterName = document.getElementById('character-name');

    const dataVersion = '1.4';

    let currentCharacter = null;

    // Predefined weapon data for each character
    const defaultWeaponsData = {
        cloud: [
            {
                name: 'Buster Sword',
                img: 'images/clouds-weapons/bustersword.png',
                ability: 'Braver++: Deal 750% Phys. Non-elem. damage [Rng.: Single Enemy] (Critical hit rate: 10%). When matching Sigils are destroyed, x1.5 damage.',
                overboost: 0,
                // No icons for this weapon
                icon1: 'images/weapon-icons/cross.png'  // Only one icon for this weapon
            },
            {
                name: 'Hardedge',
                img: 'images/clouds-weapons/hardedge.png',
                ability: 'Armor Break++: Deal 510% Phys. Non-elem. damage [Rng.: Single Enemy] (Critical hit rate: 10%). Also, PDEF is decreased [Pot. High] [Rng.: Single Enemy] [Dur.: 25s]. [Ext.: +8s] [Max. pot.: High].',
                overboost: 0,
            },
            {
                name: 'Iron Blade',
                img: 'images/clouds-weapons/ironblade.png',
                ability: 'Blast Wave++: Deal 350% Phys. Non-elem. damage [Rng.: Single Enemy] (Critical hit rate: 10%). Also, PATK is decreased [Pot.: Mid] [Rng.: All Enemies] [Dur.: 25s]. [Ext.: +8s] [Max.pot.: Mid].',
                overboost: 0,
                icon1: 'images/weapon-icons/ice.png', // Example icon
            },
            {
                name: 'Mythril Saber',
                img: 'images/clouds-weapons/mythrilsaber.png',
                ability: 'Blade Burst++: Deal 940% Mag. Non-elem damage [Rng.: Single Enemy] (Critical hit rate: 10%).',
                overboost: 0,
                // No icons for this weapon
            },
            {
                name: 'Butterfly Edge',
                img: 'images/clouds-weapons/hardedge.png',
                ability: 'Stalwart Barrier++: PDEF is increased [Pot.: High] [Rng.: Single Ally] [Dur.: 38s]. [Ext.: +12s] [Max. pot.: High]. Also, Mag. heal is cast [Pot.: 13% of heal strength] [Rng.: Single Ally].',
                overboost: 0,
            },
            {
                name: 'Murasame',
                img: 'images/clouds-weapons/ironblade.png',
                ability: 'Thunderstrike++: Deal 750% Phys. Lightning damage [Rng.: Single Enemy].',
                overboost: 0,
                icon1: 'images/weapon-icons/thunder.png', // Example icon
                icon2: 'images/weapon-icons/triangle.png', // Example icon
            },
            {
                name: 'Organics',
                img: 'images/clouds-weapons/organics.png',
                ability: 'Shock Slice++: Deal 750% Phys. Non-elem. damage [Rng.: Single Enemy] (Critical hit rate: 10%). Also, Ailment: Stun is applied [Rng.: Single Enemy] [Rate: 30%] [Dur.: 5s].',
                overboost: 0,
            },
            {
                name: 'Crystal Sword',
                img: 'images/clouds-weapons/crystalsword.png',
                ability: 'Healing Wave++: Mag. heal is cast [Pot.: 71% of heal strength] [Rng.: All Allies].',
                overboost: 0,
            },
            {
                name: 'Enhance Sword',
                img: 'images/clouds-weapons/enhancesword.png',
                ability: 'Blizzaga A++: Deal 520% Mag. Ice damage [Rng.: All Enemies].',
                overboost: 0,
                icon1: 'images/weapon-icons/ice.png', // Example icon
            },
            {
                name: 'Nail Bat',
                img: 'images/clouds-weapons/nailbat.png',
                ability: 'Disorder++: Deal 1,600% Phys. Non-elem. damage [Rng.: Single Enemy] ([Crit rate: 10%]). No boosts to limit and summon gauges when using this ability.',
                overboost: 0,
                icon1: 'images/weapon-icons/circle.png', // Example icon
            },
            {
                name: 'Apocalypse',
                img: 'images/clouds-weapons/apocalypse.png',
                ability: 'Bloody End++: Deal 940% damage Phys. Non-elem. damage [Rng.: Single Enemy] (Critical hit rate: 10%).',
                overboost: 0,
            },
            {
                name: 'Maritime Sword',
                img: 'images/clouds-weapons/maritimesword.png',
                ability: 'Seasplitter++: Deal 750% Phys. Water damage [Rng.: Single Enemy]',
                overboost: 0,
                icon1: 'images/weapon-icons/water.png', // Example icon
                icon2: 'images/weapon-icons/circle.png', // Example icon
            },
            {
                name: "Shiva's Blade",
                img: 'images/clouds-weapons/shivablade.png',
                level: 22,
                ability: 'Blizzara Surge++: Deal 450% Mag. Ice damage [Rng.: Single Enemy]',
                overboost: 0,
                icon1: 'images/weapon-icons/ice.png', // Example icon
            },
            {
                name: 'Bandaged Sword',
                img: 'images/clouds-weapons/bandagedsword.png',
                ability: 'Sanctuary++: MDEF is increased. [Pot.: Mid] [Rng.: All Allies] [Dur.: 12s]. [Ext.: +4s] [Max. pot.: High]. Also, Mag. heal is cast. [Pot.: 5% of Healing Pot.] [Rng.: All Allies].',
                overboost: 0,
            },
            {
                name: 'Skysplitter',
                img: 'images/clouds-weapons/skysplitter.png',
                ability: 'Blazing Strike++: Deal 850% Phys. Fire damage [Rng.: Single Enemy].',
                overboost: 0,
                icon1: 'images/weapon-icons/fire.png', // Example icon
                icon2: 'images/weapon-icons/cross.png', // Example icon
            },
            {
                name: "Zidane's Sword",
                img: 'images/clouds-weapons/zidanesword.png',
                ability: "Fire Energy++: Deal 1,300% Phys. Non-elem. damage [Rng.: Single Enemy] (Critical hit rate: 10%).",
                overboost: 0,
                icon1: 'images/weapon-icons/triangle.png', // Example icon
            },
            {
                name: 'Holiday Cheer',
                img: 'images/clouds-weapons/holidaycheer.png',
                ability: 'Quakera Surge A++: Deal 290% Mag. Earth damage [Rng.: All Enemies].',
                overboost: 0,
                icon1: 'images/weapon-icons/earth.png', // Example icon
            },
            {
                name: 'Stream Saber',
                img: 'images/clouds-weapons/streamsaber.png',
                ability: 'Freezing Stream++: Deal 900% Phys. Ice damage [Rng.: Single Enemy].',
                overboost: 0,
                icon1: 'images/weapon-icons/ice.png', // Example icon
                icon2: 'images/weapon-icons/circle.png', // Example icon
            },
            {
                name: 'Igneous Saber',
                img: 'images/clouds-weapons/igneoussaber.png',
                ability: 'Fira Surge A++: Deal 290% Mag. Fire damage [Rng.: All Enemies].',
                overboost: 0,
                icon1: 'images/weapon-icons/fire.png', // Example icon
            },
            {
                name: "Glavenous Sword",
                img: 'images/clouds-weapons/glavenussword.png',
                ability: "Fierce Charged Slash++: Deal 850% Phys. Non-elem. damage [Rng.: Single Enemy]. ([Crit rate: 10%]). Also, PDEF is decreased. [Pot.: Mid] [Rng.: Single Enemy] [Dur.: 30s]. [Ext.: +10s] [Max. pot.: Mid] When [Rng.: Self] HP is 50% or more, PATK is increased. [Pot.: High] [Rng.: Self] [Dur.: 35s]. [Ext.: +7s] [Max. pot.: High]",
                overboost: 0,
                icon1: 'images/weapon-icons/circle.png', // Example icon
            },
            {
                name: 'Rune Blade',
                img: 'images/clouds-weapons/runeblade.png',
                ability: 'Blizzara Surge A++: Deal 290% Mag. Ice damage. [Rng.: All Enemies]',
                overboost: 0,
                icon1: 'images/weapon-icons/ice.png', // Example icon
            },
            {
                name: 'Burning Oar',
                img: 'images/clouds-weapons/burningoar.png',
                ability: 'Fira Impact++: Deal 450% Phys. Fire damage [Rng.: Single Enemy].',
                overboost: 0,
                icon1: 'images/weapon-icons/fire.png', // Example icon
            },
            {
                name: 'Bahamut Greatsword',
                img: 'images/clouds-weapons/bahamutgreatsword.png',
                ability: 'Fierce Claw++: Deal 800% Phys. Non-elem. damage [Rng.: All Enemies] ([Crit rate: 10%]). Also, [Condition: First use] Haste is applied [Rng.: Self]. [Dur.: 30] [Ext.: +10] When [Rng.: Self] HP is 50% or more, deals 40000 additional Non-elem. Phys. pot. damage [Rng.: All Enemies].',
                overboost: 0,
                icon1: 'images/weapon-icons/circle.png', // Example icon
            },
        ]
    };

    let storedData = JSON.parse(localStorage.getItem('weaponsData')) || {};

    // Merge data and version control
    if (!storedData.version || storedData.version !== dataVersion) {
        storedData = mergeWeaponsData(defaultWeaponsData, storedData);
        saveToLocalStorage();
    }

    function mergeWeaponsData(defaultData, storedData) {
        const mergedData = { version: dataVersion };

        for (let character in defaultData) {
            mergedData[character] = defaultData[character].map(defaultWeapon => {
                const storedWeapon = storedData[character]?.find(w => w.name === defaultWeapon.name);
                return storedWeapon ? { ...defaultWeapon, overboost: storedWeapon.overboost } : defaultWeapon;
            });
        }
        return mergedData;
    }

    function saveToLocalStorage() {
        localStorage.setItem('weaponsData', JSON.stringify(storedData));
    }

    // Function to render stars based on the overboost level
    function renderStars(overboost) {
        let stars = '';
        for (let i = 0; i < 5; i++) {
            if (overboost <= 5) {
                stars += i < overboost ? '<span class="red-star">★</span>' : '<span class="gold-star">★</span>';
            } else {
                stars += i < (overboost - 5) ? '<span class="pink-star">★</span>' : '<span class="red-star">★</span>';
            }
        }
        return stars;
    }

    function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    // Function to display weapons for a selected character
    function displayWeapons(character) {
        weaponSection.innerHTML = ''; // Clear previous weapons

        if (storedData[character] && storedData[character].length > 0) {
            storedData[character].forEach((weapon, index) => {
                const weaponCard = document.createElement('div');
                weaponCard.classList.add('weapon-card');

                let iconsHTML = '';
                if (weapon.icon1 || weapon.icon2) {
                    iconsHTML += '<div class="weapon-icons">';
                    if (weapon.icon1) {
                        iconsHTML += `<img src="${weapon.icon1}" alt="Icon 1" class="weapon-icon">`;
                    }
                    if (weapon.icon2) {
                        iconsHTML += `<img src="${weapon.icon2}" alt="Icon 2" class="weapon-icon">`;
                    }
                    iconsHTML += '</div>';
                }

                weaponCard.innerHTML = `
                    <img src="${weapon.img}" alt="${weapon.name}" class="weapon-image">
                    <div class="weapon-header">
                        <h3>${weapon.name}</h3>
                        ${iconsHTML !== '' ? iconsHTML : ''}
                    </div>
                    <p><strong>Ability:</strong> ${weapon.ability}</p>
                    <div class="overboost-stars" id="stars-${index}">
                        ${renderStars(weapon.overboost)}
                    </div>
                    <input type="range" min="0" max="10" value="${weapon.overboost || 0}" step="1" data-index="${index}">
                    <span id="overboost-count-${index}">Overboost: ${weapon.overboost}</span>
                `;

                weaponSection.appendChild(weaponCard);

                const slider = weaponCard.querySelector('input[type="range"]');
                slider.addEventListener('input', function () {
                    const idx = this.getAttribute('data-index');
                    storedData[character][idx].overboost = this.value;
                    document.getElementById(`stars-${idx}`).innerHTML = renderStars(this.value);
                    document.getElementById(`overboost-count-${idx}`).textContent = `Overboost: ${this.value}`;
                    saveToLocalStorage();
                });
            });

            // Update the header with the correct text based on the character
            characterName.innerHTML = `${capitalize(character)}'s Weapons - all weapon abilities are shown at lvl 120 and OB10`;
        } else {
            weaponSection.innerHTML = '<p>No weapons available for this character.</p>';
        }
    }

    characterTabs.forEach(tab => {
        tab.addEventListener('click', function () {
            currentCharacter = this.getAttribute('data-character');
            characterName.innerHTML = `${capitalize(currentCharacter)}'s Weapons - all weapon abilities are shown at lvl 120 and OB10`;
            displayWeapons(currentCharacter);
        });
    });

    currentCharacter = 'cloud';
    characterName.innerHTML = `Cloud's Weapons - all weapon abilities are shown at lvl 120 and OB10`;
    displayWeapons(currentCharacter);
});
