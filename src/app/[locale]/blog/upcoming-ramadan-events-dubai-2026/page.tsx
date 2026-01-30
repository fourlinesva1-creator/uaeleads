import type { Metadata } from 'next';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';

export const metadata: Metadata = {
    title: 'Ramadan 2026 in Dubai: The Definitive "Local\'s Guide"',
    description: 'Discover the best upcoming Ramadan events in Dubai for 2026, from Hai Ramadan at Expo City to the secret street food festivals in Karama.',
    openGraph: {
        title: 'Ramadan 2026 in Dubai: The Definitive "Local\'s Guide"',
        description: 'Discover the best upcoming Ramadan events in Dubai for 2026, from Hai Ramadan at Expo City to the secret street food festivals in Karama.',
        images: [{ url: '/images/blog/ramadan-dubai-skyline-2026.png', width: 1200, height: 630 }],
        type: 'article',
        publishedTime: '2026-02-01T08:00:00.000Z',
        authors: ['Tent Now'],
    },
};

export default function ArticlePage() {
    return (
        <main className="min-h-screen bg-bg-dark text-white font-sans">
            <article className="max-w-4xl mx-auto px-4 py-12 md:py-20">
                {/* Header */}
                <header className="mb-12 text-center">
                    <div className="relative w-full aspect-video mb-8 rounded-2xl overflow-hidden shadow-2xl border border-border">
                        <Image
                            src="/images/blog/ramadan-dubai-skyline-2026.png"
                            alt="Ramadan 2026 Dubai Skyline"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    <div className="flex items-center justify-center gap-4 text-sm text-gold font-bold uppercase tracking-wider mb-4">
                        <span>February 1, 2026</span>
                        <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                        <span>Events</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-transparent bg-clip-text bg-gradient-to-r from-gold via-white to-gold mb-6 leading-tight">
                        Ramadan 2026 in Dubai: The Definitive "Local’s Guide" to What’s Actually Happening
                    </h1>
                    <p className="text-xl text-text-muted italic max-w-2xl mx-auto">
                        By Your Dubai Ramadan Insider
                    </p>
                </header>

                {/* Content Body */}
                <div className="prose prose-invert prose-lg max-w-none prose-headings:font-display prose-headings:text-gold prose-a:text-gold prose-strong:text-white">
                    <p>
                        Alright, let’s talk Ramadan. If you’re going to be in Dubai around <strong>mid-February 2026</strong> (we’re looking at you, February 19th-ish), you are witnessing the city’s biggest transformation act. One day it’s business as usual, and the next, the pace slows down, the lights go up, and the entire city smells like Ouzi and expensive oud.
                    </p>
                    <p>
                        I’ve dug through the calendars (so you don’t have to) to bring you the lowdown on what’s <em>actually</em> happening this year. We’re moving beyond just hotel buffets—this year is about street food, massive night markets, and community vibes.
                    </p>
                    <p>Here is your cheatsheet for Ramadan 2026 in Dubai.</p>

                    <hr className="border-border my-12" />

                    <h2>1. The Heavy Hitter: Hai Ramadan at Expo City</h2>
                    <p>
                        Remember Expo 2020? Of course you do. Well, it comes alive again for <strong>"Hai Ramadan."</strong>
                    </p>
                    <ul>
                        <li><strong>The Vibe:</strong> Think "Grandmother’s Supermarket" (literally, that’s a thing there for kids), traditional storytelling, and a vibe that feels like a modern-day Bedouin village. It’s huge, it’s outdoors, and it’s nostalgic.</li>
                        <li><strong>Why Go:</strong> It’s not just about eating; it’s about the <em>scene</em>. They usually have a massive cannon firing at sunset which scares the life out of you even when you know it’s coming.</li>
                        <li><strong>Wallet Watch:</strong> Entry is usually cheap (around AED 20), but you’ll spend your budget on the artisanal food stalls.</li>
                    </ul>

                    <h2>2. The "Foodie's Secret": Ramadan Street Food Festival in Karama</h2>
                    <p>
                        Forget the 5-star hotels for a second. If you want to eat like a real Dubai resident, you go to <strong>Karama</strong>.
                    </p>
                    <ul>
                        <li><strong>The Vibe:</strong> Chaos, but the delicious kind. The vibe here is raw, authentic, and frantic.</li>
                        <li><strong>The Food:</strong> We’re taking over 55+ restaurants serving everything from spicy South Indian curries to authentic Luqaimat. It’s a "Long Table" concept on weekends—literally strangers sitting together sharing food. It’s beautiful.</li>
                        <li><strong>Best For:</strong> People who care more about flavor than white tablecloths.</li>
                    </ul>

                    <div className="relative w-full h-[400px] my-12 rounded-2xl overflow-hidden shadow-xl border border-border">
                        <Image
                            src="/images/blog/ramadan-night-market.png"
                            alt="Ramadan Night Market Dubai"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <h2>3. The "Shop ‘Til You Drop": Ramadan Night Market at DWTC</h2>
                    <p>
                        If you hate sleeping and love shopping, welcome home. The <strong>Ramadan Night Market</strong> at the World Trade Centre is a beast.
                    </p>
                    <ul>
                        <li><strong>The Vibe:</strong> A massive indoor bazaar. It’s loud, it’s busy, and it sells literally everything. Perfumes, Abayas, random gadgets you didn’t know you needed, and home decor that will 100% not fit in your suitcase.</li>
                        <li><strong>Pro Tip:</strong> This is the place to buy your Eid gifts. Haggle. Seriously, don’t pay the first price. It’s a sport.</li>
                    </ul>

                    <h2>4. The "Vibe Check": Ramadan District at Jumeirah Emirates Towers</h2>
                    <p>
                        This is for the cool crowd. <strong>Ramadan District</strong> turns the base of the Emirates Towers into a glowing, artsy hangout spot.
                    </p>
                    <ul>
                        <li><strong>The Vibe:</strong> Fairy lights everywhere, local artisan pop-ups, and very aesthetic coffee shops. It’s less "traditional market" and more "Pinterest board came to life."</li>
                        <li><strong>Best For:</strong> Your Instagram story. Also, just sitting on a beanbag with a coffee responding to emails at 11 PM.</li>
                    </ul>

                    <h2>5. The "Community Picnic": Ramadan at the Park (Zabeel Park)</h2>
                    <p>
                        This is a newer one, aligning with the UAE’s focus on community. Picture a giant picnic at <strong>Zabeel Park Amphitheatre</strong>.
                    </p>
                    <ul>
                        <li><strong>The Vibe:</strong> Super family-friendly. Kids running around, live performances that aren’t too loud, and a mix of international food stalls.</li>
                        <li><strong>Best For:</strong> Families who are terrified of bringing their toddlers to a quiet hotel restaurant. Here, chaos is welcomed.</li>
                    </ul>

                    <hr className="border-border my-12" />

                    <h2>The "I'm Feeling Fancy" Section (Iftars & Suhoors)</h2>
                    <p>Okay, we can’t ignore the classics. If you want to dress up and spend some cash:</p>
                    <ul>
                        <li><strong>Asateer Tent (Atlantis):</strong> The celebrity of tents. Expensive (~AED 295+), crowded, but absolutely stunning.</li>
                        <li><strong>Madinat Jumeirah:</strong> The "Old Dubai" charm with world-class AC. Great for business meetings where you want to impress but also actually hear the person talking.</li>
                        <li><strong>The Desert Escape (Bab Al Shams / Camel Uschi Farm):</strong> Drive out of the city. Break your fast under the stars. Realize how quiet the desert is. It’s a vibe reset.</li>
                    </ul>

                    <hr className="border-border my-12" />

                    <h2>A Few "Insider" Tips</h2>
                    <ol>
                        <li><strong>The Fireworks:</strong> Yes, we blast fireworks for everything. Expect shows on weekends at <strong>Al Seef</strong>, <strong>Festival City</strong>, and <strong>Bluewaters</strong>.</li>
                        <li><strong>The "Maghrib Rush":</strong> I’ve said it before, I’ll say it again. Do not drive between 5:30 PM and 6:30 PM unless you have a death wish or supreme patience. The roads are a hungry, hangry mess.</li>
                        <li><strong>Mall Hours:</strong> The malls are open until 1 AM or 2 AM. It’s surreal to be buying sneakers at midnight, but in Dubai, it’s normal.</li>
                    </ol>

                    <hr className="border-border my-12" />

                    <div className="bg-bg-elevated p-8 rounded-2xl border border-gold/20 shadow-xl shadow-gold/5 my-12">
                        <h2 className="text-3xl font-display text-white mb-4">Want to Host Instead of Roast (in Traffic)?</h2>
                        <p className="text-text-muted mb-6">
                            Maybe reading about the traffic made you want to stay home. I don’t blame you.
                        </p>
                        <p className="text-text-muted mb-6">
                            If you have a backyard, a villa garden, or you’re an event manager trying to create your own mini "Asateer," you don’t need to stress. This is where <strong>Tent Now</strong> comes in (yes, that’s us).
                        </p>
                        <p className="text-text-muted mb-8">
                            We don’t just rent tents; we build instant venues. We bring the AC (crucial), the heavy carpets, the mood lighting, and the structure itself. You invite the people; we build the palace.
                        </p>
                        <div className="text-center">
                            <Link href="/request-quote" className="inline-block px-8 py-4 bg-gold text-bg-dark font-bold uppercase tracking-widest rounded-lg hover:bg-white transition-colors shadow-lg">
                                Build My Ramadan Venue
                            </Link>
                            <div className="mt-4 text-xs text-text-muted uppercase tracking-widest">
                                Ramadan 2026 Starts Feb 19th • Book Now
                            </div>
                        </div>
                    </div>

                    <p className="text-center italic text-text-muted mt-12">
                        <strong>Ramadan 2026 is starting mid-February.</strong> The good venues book out, and honestly, so do our tents. Plan early, eat well, and Ramadan Kareem!
                    </p>

                </div>
            </article>
        </main>
    );
}
