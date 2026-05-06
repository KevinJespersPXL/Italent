import { Injectable } from '@angular/core';
import { Activity, DetailedActivity } from '../models/activity.model';
import { Profile, PXLFactor } from '../models/profile.model';

@Injectable({
    providedIn: 'root'
})
export class PortfolioService {

    getProfile(): Profile {
        return {
            name: 'Kevin Jespers',
            subtitle: 'Student Applicatieontwikkeling · Hogeschool PXL',
            introductions: [
                'Ik ben een student applicatieontwikkeling aan de PXL met een achtergrond in de zorgsector. Ik heb een diploma als apotheekassistent en doe dit wekelijks ook nog op zaterdag. Mijn interesse in IT is gegroeid uit het opstellen van de website van het apotheek. Dit sprak mij zeer aan en zorgde ervoor dat ik de opleiding voor applicatieontwikkeling gestart was.',
                'Ik ben vanuit mezelf vrij analytisch en heb graag een goede structuur in alles wat ik doe. Dit kan ervoor zorgen dat ik soms wat trager van start geraak, maar eens ik het proces door heb, gaat alles zeer correct en vlot.',
                'Binnen 3 tot 5 jaar wil ik mijn ervaringen uit de zorgsector en applicatieontwikkeling versmelten. Ik wil een job uitvoeren als softwareontwikkelaar voor bedrijven in de health sector. Hierdoor is mijn stage bij Cubigo ook zeer interessant — Cubigo bouwt een overkoepelende applicatie voor in rusthuizen. Waar ik nog wat meer aan wil werken is mijn besluitvaardigheid: ik moet leren knopen beter door te hakken en keuzes te maken.'
            ]
        };
    }

    getAllActivities(): Activity[] {
        return [
            {
                id: 1,
                title: 'Infosupport: .Net Aspire',
                date: '25 Februari 2025',
                type: 'Seminaries'
            },
            {
                id: 2,
                title: 'Low code/No code development',
                date: '4 Maart 2025',
                type: 'Seminaries'
            },
            {
                id: 3,
                title: 'ACA group: React',
                date: '29 April 2025',
                type: 'Seminaries'
            },
            {
                id: 4,
                title: 'Rendering 3D in web - Low to high fidelity',
                date: '6 Mei 2025',
                type: 'Seminaries'
            },
            {
                id: 5,
                title: 'BDD & ATDD',
                date: '5 November 2025',
                type: 'Seminaries'
            },
            {
                id: 6,
                title: 'Postman AI',
                date: '26 November 2025',
                type: 'Seminaries'
            },
            {
                id: 7,
                title: 'De wereld van UX',
                date: '10 December 2025',
                type: 'Seminaries'
            },
            {
                id: 8,
                title: 'Open Source',
                date: '17 December 2025',
                type: 'Seminaries'
            },
            {
                id: 9,
                title: 'Domain Driven Design',
                date: '2 October 2025',
                type: 'Innovatieroute'
            },
            {
                id: 10,
                title: 'Hackathon in samenwerking met Smart ICT',
                date: '16 Februari 2026 - 17 Februari 2026',
                type: 'Hackaton'
            },
            {
                id: 11,
                title: 'Projectweek 2TIN',
                date: '10 Februari 2025 - 14 Februari 2025',
                type: 'Persoonlijke ontwikkeling'
            },
            {
                id: 12,
                title: 'Brein aan het werk! Niet storen',
                date: '18 Februari 2025',
                type: 'Persoonlijke ontwikkeling: POP sessie'
            },
            {
                id: 13,
                title: 'POPping',
                date: '24 Maart 2025',
                type: 'Persoonlijke ontwikkeling: POP sessie'
            },
            {
                id: 14,
                title: 'My Team and I',
                date: '15 Oktober 2025',
                type: 'Persoonlijke ontwikkeling'
            },
            {
                id: 15,
                title: 'BusIT-week Cardiff Metropolitan University',
                date: '6 April 2025 - 11 April 2025',
                type: 'Internationalisering'
            },
            {
                id: 16,
                title: 'Ethical hacking',
                date: '11 Maart 2025',
                type: 'Extra Seminaries'
            },
            {
                id: 17,
                title: 'Vlaamse Programmeerwedstrijd',
                date: '11 Februari 2026',
                type: 'Student Engagement'
            },
            
        ];
    }

    getDetailedActivities(): DetailedActivity[] {
        return [
            {
                id: 1,
                title: 'BusIT-week Cardiff Metropolitan University',
                date: 'Oktober 2025',
                type: 'Internationale samenwerking',
                description: 'Tijdens de BusIT-week in Cardiff heb ik in een internationale, multidisciplinaire context kunnen functioneren. Deze ervaring heeft mijn communicatieve vaardigheden in het Engels aanzienlijk verbeterd en mij laten zien hoe belangrijk culturele diversiteit is in IT-projecten.',
                learnings: [
                    'Succesvol samenwerken in een internationaal team',
                    'Technische concepten communiceren in het Engels',
                    'Omgaan met verschillende culturen en werkstijlen',
                    'Zelfstandig organiseren van een internationale reis'
                ],
                tags: ['Internationale samenwerking', 'Communicatie', 'Teamwork']
            },
            {
                id: 2,
                title: 'Vlaamse Programmeerwedstrijd',
                date: 'November 2025',
                type: 'Wedstrijd',
                description: 'De Vlaamse Programmeerwedstrijd was een belangrijke mijlpaal voor mij. Het behalen van de 2e plaats zonder hulp van AI-tools bevestigde mijn technische fundering en gaf me het zelfvertrouwen dat mijn algoritmisch denken op een goed niveau zit.',
                learnings: [
                    'Werken onder tijdsdruk',
                    'Algoritmisch denken en probleem oplossing',
                    'Besluitvaardigheid verbeteren',
                    'Vertrouwen op eerste logische analyse'
                ],
                tags: ['Programmeren', 'Algoritmes', 'Competitie', '2e plaats']
            },
            {
                id: 3,
                title: 'Hackathon in samenwerking met Smart ICT',
                date: 'December 2025',
                type: 'Hackathon',
                description: 'Tijdens de Hackathon met Smart ICT kwam mijn unieke combinatie van empathie uit de zorg en analytisch vermogen uit de IT perfect samen. Ik kon ethische vraagstukken rondom privacy en suïcidepreventie omzetten in concrete AI-parameters. Dit was een moment waarop mijn achtergrond in de zorgsector echt een meerwaarde bleek te zijn.',
                learnings: [
                    'AI-gestuurde moderatie-tools ontwikkelen',
                    'Ethische vraagstukken vertalen naar technische oplossingen',
                    'Privacy en veiligheid integreren in applicaties',
                    'Innovatieve technologieën toepassen'
                ],
                tags: ['AI', 'Ethiek', 'Privacy', 'Innovation', 'Health Tech']
            }
        ];
    }

    getPXLFactors(): PXLFactor[] {
        return [
            {
                title: 'Passie',
                description: 'Mijn gedrevenheid om buiten de schooluren deel te nemen aan wedstrijden en mijn passie voor de zorg te integreren in code.'
            },
            {
                title: 'Ondernemingszin',
                description: 'Het zelf organiseren van de reis naar Cardiff en het strategisch uitdenken van een workflow tijdens de VPW.'
            },
            {
                title: 'Innovatie',
                description: 'Het experimenteren met cutting-edge technologieën zoals .NET Aspire en AI-gestuurde moderatie-tools.'
            },
            {
                title: '(Internationale) Samenwerking',
                description: 'Mijn succesvolle bijdrages aan teams met verschillende achtergronden en nationaliteiten.'
            }
        ];
    }

    getReflectionSections() {
        return {
            introduction: 'In deze eindreflectie blik ik terug op mijn persoonlijke en professionele groei gedurende dit jaar.',
            mainText: [
                'Aan het begin van dit traject was mijn hoofddoel om de overstap van de zorgsector naar de IT-wereld te verwezenlijken. Terugkijkend op de afgelopen periode kan ik met zekerheid zeggen dat dit doel is bereikt. Ik ben niet langer alleen een apotheekassistent met een interesse in computers, maar een analytische softwareontwikkelaar die complexe maatschappelijke problemen kan vertalen naar technische oplossingen.',
                'Tijdens de Bus-IT week in Cardiff heb ik bewezen dat ik in een internationale, multidisciplinaire context kan functioneren en mijn communicatieve grenzen in het Engels kan verleggen. De Vlaamse Programmeerwedstrijd bevestigde mijn technische fundering; het behalen van de 2e plaats zonder hulp van AI-tools gaf me het zelfvertrouwen dat mijn algoritmisch denken op een goed niveau zit.',
                'Mijn grootste sterkte is de unieke combinatie van empathie uit de zorg en analytisch vermogen uit de IT. Tijdens de Hackathon met Smart ICT kwam dit perfect samen: ik kon ethische vraagstukken rondom privacy en suïcidepreventie omzetten in concrete AI-parameters.',
                'Een punt waar ik aan blijf werken, is mijn besluitvaardigheid. Hoewel ik soms tijd nodig heb om processen volledig te doorgronden, heb ik tijdens de tijdsdruk van de wedstrijden geleerd om knopen door te hakken en te vertrouwen op mijn eerste logische analyse.'
            ],
            pxlIntro: 'Ik herken mezelf sterk in de vier pijlers van de PXL X-Factor:',
            futureVision: [
                'Mijn toekomst ligt op de kruising van gezondheidszorg en informatica. Mijn stage bij Cubigo is hier de ideale eerste stap in: het bouwen van applicaties die de levenskwaliteit in de ouderenzorg direct verbeteren. Binnen drie tot vijf jaar wil ik een gevestigde waarde zijn als softwareontwikkelaar in de health-sector.',
                'Om mij blijvend te ontwikkelen, zal ik de komende jaren actief blijven binnen developercommunities en seminaries blijven volgen om de snelle evoluties in het vakgebied, zoals low-code en AI-beveiliging, op de voet te volgen.'
            ]
        };
    }
}
