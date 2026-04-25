// lib/blog.js — mock data + server-side fetch helpers (no client-side fetching)

const blogs = [
  {
    slug: "the-quiet-art-of-slow-travel",
    title: "The Quiet Art of Slow Travel",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    date: "April 18, 2025",
    excerpt:
      "In an era of rushed itineraries and tick-box tourism, slow travel invites us to linger, to breathe, and to truly inhabit a place rather than merely pass through it.",
    category: "Travel",
    author: "Amara Osei",
    mainBody: `
      <p>There is a particular kind of morning that only reveals itself to those who stay long enough. Not the frantic first-day scramble to landmarks, but the third Tuesday in a place — when the café owner knows your order, when you have a favourite bench, when the neighbourhood belongs a little to you.</p>
      <p>Slow travel is not a methodology so much as a disposition. It asks a single question: what would it feel like to actually live here, if only for a while? The answer, invariably, is richer and stranger than any guidebook can prepare you for.</p>
      <h2>The Philosophy of Lingering</h2>
      <p>We have been conditioned by an industry that profits from motion. More cities, more nights, more stamps in the passport — as if geography were a leaderboard. Slow travel is the quiet rebellion against this logic. It says: one place, deeply, is worth ten places, fleetingly.</p>
      <p>The writer Pico Iyer, who has written beautifully about stillness, notes that the more you sit in one place, the more it reveals itself. Cafés have their morning regulars and their afternoon crowds. Parks hold different light at different hours. Streets that seemed unremarkable become storied.</p>
      <h2>Practical Architecture of a Slow Trip</h2>
      <p>The structure of a slow journey looks almost irresponsible to conventional eyes. An entire week in one city. Three days in a single valley. A fortnight in one coastal town. The itinerary, if you can call it that, is more rhythm than schedule.</p>
      <p>You might visit the market on Wednesday because that is market day, and return the following Wednesday because you want to see it again. You might abandon a plan because the light on the river at 4pm demands your attention. This is not inefficiency — this is the point.</p>
      <h2>What You Actually Learn</h2>
      <p>Slow travel teaches you the texture of ordinary life in extraordinary places. You learn which streets flood when it rains. You learn that the best fish is sold from the second stall, not the first. You learn the language of gestures, the unspoken social rules, the way strangers acknowledge each other on a familiar street.</p>
      <p>These are not the things that make it into photographs. They are the things that make it into memory — the details that reconstruct a place whole, years later, when someone mentions its name.</p>
      <p>And that, perhaps, is the quietest argument for slow travel: it gives you something to keep.</p>
    `,
  },
  {
    slug: "designing-for-silence",
    title: "Designing for Silence: The Architecture of Calm Spaces",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
    date: "April 10, 2025",
    excerpt:
      "Modern architecture increasingly grapples with a paradox: how to design spaces that quiet the mind in a world saturated with stimulation.",
    category: "Design",
    author: "Linnea Bjork",
    mainBody: `
      <p>Sound is the invisible architecture of a room. Long before you take in the proportions of a space, its ceiling height, its materials, its light — you hear it. The acoustic personality of a building tells you, in fractions of a second, how to feel inside it.</p>
      <p>The architects and designers who understand this wield an extraordinary power. They can make a space feel cathedral-vast or intimately hushed using nothing more than the choice of material, the angle of a surface, the depth of a recess.</p>
      <h2>The Problem with Openness</h2>
      <p>The open-plan revolution of the late twentieth century produced some spectacular failures of acoustic design. Offices in which every conversation was everyone's conversation. Restaurants calibrated, one suspects, to prevent meaningful speech. Apartments in which the boundary between rooms had dissolved into ambient noise.</p>
      <p>We have been living through a slow correction. The pandemic, which forced a reckoning with domestic space, accelerated a desire for rooms with distinct personalities — places that could hold quiet as easily as conversation.</p>
      <h2>Materials That Listen</h2>
      <p>Soft materials absorb. Hard materials reflect. This binary is the primary vocabulary of acoustic design, and the most elegant spaces deploy both with intention. A room lined entirely with stone creates a restless energy; one cushioned entirely with fabric can feel deadened. The mastery lies in calibration.</p>
      <p>Japanese design traditions understood this intuitively. The tea house, in its careful ordering of timber, tatami, and shoji screen, creates a space that manages sound with the same precision it manages light. Nothing is accidental. The creak of a board, the whisper of paper — these are not flaws to be engineered away but details that give the space a living voice.</p>
      <h2>Silence as Luxury</h2>
      <p>There is a reason that the most expensive hotels in the world tend to be very quiet. Silence, in contemporary urban life, has become a luxury resource — scarce, valued, actively sought. The architecture of calm is increasingly understood not as absence but as sophisticated presence.</p>
      <p>The best quiet spaces are not empty. They are full of something careful, something designed, something that took effort to arrive at. That effort, when you feel it, is itself a form of hospitality.</p>
    `,
  },
  {
    slug: "fermentation-as-philosophy",
    title: "Fermentation as Philosophy: Lessons from the Living Kitchen",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    date: "March 28, 2025",
    excerpt:
      "To ferment is to surrender control to invisible forces. What the sourdough revolution quietly taught us about trust, time, and the limits of mastery.",
    category: "Food",
    author: "Rafael Morales",
    mainBody: `
      <p>The sourdough starter is a lesson in humility. You feed it. You tend it. You establish conditions you believe to be correct. And then you wait, because the actual work is being done by organisms you cannot see, following logic you do not fully understand.</p>
      <p>This is not a recipe. It is a philosophy. And it is the reason, I think, that so many people found themselves drawn to fermentation during the enforced stillness of the pandemic years — not just for bread, but for kimchi, for kombucha, for the whole strange alchemy of transformation through time and microbial life.</p>
      <h2>Against Mastery</h2>
      <p>Most of cooking is a story of mastery. Technique, precision, control. The cook applies knowledge to ingredients and produces a predictable result. Fermentation refuses this narrative. The variables are too numerous, the actors too small, the timescales too long.</p>
      <p>A sourdough made in August will not behave like the same sourdough in January. A kimchi made in Seoul will ferment differently than one made in a kitchen in London, because the air itself is different, the ambient microbiome distinct. The recipe is a starting point, not a guarantee.</p>
      <h2>Time as Ingredient</h2>
      <p>What fermentation adds, above all else, is time. Not passive time — active time, in which invisible forces are transforming the substance at a molecular level, producing acids and alcohols and gases, changing flavour and texture in ways no amount of direct intervention could achieve.</p>
      <p>This is deeply unfashionable knowledge in an era of instant results. But it is also, increasingly, what people seek. The slow, the patient, the process that cannot be rushed without being broken.</p>
      <h2>The Ethics of Collaboration</h2>
      <p>There is an ethical dimension here that fermenters sometimes articulate and sometimes just feel. You are not the author of fermented food. You are a collaborator with processes older than agriculture, with organisms that predate the human species by billions of years.</p>
      <p>This collaboration demands a particular kind of attention. Not the focused, controlling attention of the chef who demands obedience from their ingredients, but the receptive attention of someone listening for information they did not know they needed.</p>
      <p>The kitchen, at its most alive, works like this: you and something else, making something neither of you could make alone.</p>
    `,
  },
  {
    slug: "the-second-life-of-things",
    title: "The Second Life of Things: On Repair Culture",
    image:
      "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=800&q=80",
    date: "March 14, 2025",
    excerpt:
      "In Japan, the practice of kintsugi repairs broken pottery with gold — making the breakage part of the beauty. A quiet counter-movement is applying this philosophy to how we think about all objects.",
    category: "Culture",
    author: "Amara Osei",
    mainBody: `
      <p>The repair café movement began, quietly, in Amsterdam in 2009. A community space where people brought broken things — toasters, bicycles, jackets, radios — and volunteers helped fix them. The premise was simple. The implications, it turns out, are vast.</p>
      <p>Repair is a political act in a culture of planned obsolescence. It says: this object has more life in it. It says: the labour of making things matters, and that labour should not be discarded casually. It says: I choose relationship with an object over the frictionless replacement of it.</p>
      <h2>Kintsugi and the Honesty of Damage</h2>
      <p>The Japanese art of kintsugi — repairing ceramics with lacquer mixed with gold, silver, or platinum — is often cited as the aesthetic exemplar of repair culture. A kintsugi bowl does not hide its history. Its cracks are gilded, made visible, made part of the object's character.</p>
      <p>This is philosophically radical. Western aesthetics typically treats damage as degradation — the imperfection that reduces an object's value. Kintsugi proposes the opposite: that damage, honestly repaired, adds a dimension that perfection lacks.</p>
      <h2>The Skills We Lost</h2>
      <p>There is a skills crisis embedded in the throwaway economy. For much of human history, repair was a basic competency — darning, soldering, woodworking, cobbling. These skills were domestic and common. They are now specialist and rare.</p>
      <p>The repair café addresses this partly by providing expertise, but more importantly by providing permission. People come with broken things they didn't know they could fix. They leave with fixed things they didn't know how to fix, and sometimes with the knowledge of how to fix them.</p>
      <h2>A Different Relationship with Objects</h2>
      <p>To repair something is to know it differently. You understand its structure, its tolerances, the logic of its assembly. A repaired object carries this knowledge as a kind of intimacy that a new object cannot provide.</p>
      <p>There is a word in Japanese — monozukuri — that means something like "the art of making things." It implies care, craft, and a relationship of respect between maker and made. Repair culture extends this into the relationship between user and used. The object deserves care. The care produces meaning.</p>
    `,
  },
  {
    slug: "reading-the-city-at-night",
    title: "Reading the City at Night",
    image:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80",
    date: "February 27, 2025",
    excerpt:
      "Cities at night are different cities. The social contract shifts, the textures change, and for the flâneur willing to walk, an entirely different map reveals itself.",
    category: "Culture",
    author: "Linnea Bjork",
    mainBody: `
      <p>The city you walk at 2am is not the city you inhabit by day. Same streets, same buildings, same infrastructure of pipes and wires and paving stones — but everything reorganised by darkness and by the selective withdrawal of most of its population. A different city entirely, with different rules, different textures, a different social grammar.</p>
      <p>Walter Benjamin, writing about Paris in the 1930s, described the flâneur — the idle urban walker — as a reader of the city, someone who moved through it attentively, gathering meaning from surfaces and spaces and the lives visible within them. Night-walking extends this readership into different chapters.</p>
      <h2>The Night Shift</h2>
      <p>The nocturnal city belongs, primarily, to the people who service the city that sleeps. Delivery drivers, cleaners, security guards, hospital workers — the vast infrastructure of maintenance that keeps the daytime world functional operates in the hours that most people never see.</p>
      <p>To walk at night is to become briefly aware of this invisible labour. The street cleaner pushing a cart at 4am. The kitchen porter loading waste into a truck behind a restaurant that, eight hours ago, was full of people celebrating. The city, at night, shows you how it actually works.</p>
      <h2>Light as Architecture</h2>
      <p>Darkness is a design medium. The cities that understand this use artificial light not merely to make the dark safe but to sculpt it — to create drama, to reveal what daylight flattens, to establish hierarchy between the lit and the unlit.</p>
      <p>A floodlit cathedral in an otherwise dark piazza is a different kind of architecture than the same building in daylight. The contrast does work that daylight cannot. It creates theatre from stone.</p>
      <h2>What Night Permits</h2>
      <p>There is a social permission that comes with darkness. The anonymity of night has historically made it the domain of transgression — of the behaviours that daylight and its witnesses prevent. This gives night-walking its particular charge, its awareness of possibility.</p>
      <p>But the more interesting permission is simpler: the permission to see. The night-time city strips away the noise of commerce, the insistence of advertisement, the constant soft pressure of the social day. What remains is structure, and light, and the strange beauty of a city resting.</p>
    `,
  },
  {
    slug: "on-writing-slowly",
    title: "On Writing Slowly: In Defence of the Long Draft",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80",
    date: "February 10, 2025",
    excerpt:
      "The internet rewards velocity. But the most enduring writing has always been slow — accumulated through revision, rethinking, and the patient excavation of what you actually mean.",
    category: "Writing",
    author: "Rafael Morales",
    mainBody: `
      <p>There is a genre of productivity writing — if it can be called that — that treats the blank page as an obstacle course and the finished draft as a victory condition. Write faster, it says. Use the Pomodoro technique. Set word-count targets. Eliminate friction. Ship.</p>
      <p>I have tried all of these things. Some of them produce words. None of them, in my experience, produce the particular quality of attention that I think writing is actually for.</p>
      <h2>What Revision Actually Is</h2>
      <p>Revision is typically described as cleaning — fixing errors, improving clarity, strengthening structure. This is true, but it undersells what revision does at its deepest level. Revision is the process by which you discover what you were trying to say.</p>
      <p>A first draft is rarely an expression of thought. It is more like the negative of thought — an impression of where the thinking wants to go, before you have understood the direction. The second draft gets closer. The third sometimes arrives. The fourth, if you are lucky, surprises you with the thing you couldn't have predicted when you started.</p>
      <h2>Time as Editor</h2>
      <p>Professional editors and experienced writers share a common tool: distance. Leave a draft alone for a week, a month, long enough to forget what you meant and encounter what you wrote. The distance makes visible what proximity hides.</p>
      <p>You will find, returning to an old draft, that the paragraphs you loved are often the ones you should cut — they were doing work for your ego, not for the reader. The paragraphs you doubted are sometimes the truest ones, written before you understood what you were trying to say.</p>
      <h2>Against the First Draft Myth</h2>
      <p>We have a cultural mythology of the first draft — the writer seized by inspiration, producing in a fever what becomes a masterpiece. This mythology is almost entirely false, and the writers who have written most honestly about their process confirm it.</p>
      <p>Joan Didion rewrote everything she had already written each morning before writing anything new — a form of constant rereading that kept the whole piece present and alive. James Baldwin carried drafts for years, accumulating revisions until something clicked into place.</p>
      <p>The myth of the perfect first draft is useful to no one. The practice of slow, patient return — reading again, reconsidering, writing more carefully than you thought you needed to — is useful to everyone.</p>
    `,
  },
];

/**
 * Returns all blog posts (simulates a server-side DB/CMS call)
 */
export async function getAllBlogs() {
  // Simulate async data fetching
  return blogs;
}

/**
 * Returns a single blog post by slug
 */
export async function getBlogBySlug(slug) {
  return blogs.find((b) => b.slug === slug) ?? null;
}

/**
 * Returns all unique categories
 */
export async function getAllCategories() {
  const cats = blogs.map((b) => b.category);
  return ["All", ...Array.from(new Set(cats))];
}

/**
 * Returns blogs filtered by category ('All' returns everything)
 */
export async function getBlogsByCategory(category) {
  if (!category || category === "All") return blogs;
  return blogs.filter((b) => b.category === category);
}

/**
 * Returns the N most recent blogs
 */
export async function getLatestBlogs(n = 3) {
  return blogs.slice(0, n);
}
