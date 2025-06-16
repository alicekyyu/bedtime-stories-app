import React, { useState, useEffect } from 'react';
import { Moon, Star, Book, Sparkles, Heart, TreePine, Castle, Fish, Rabbit, Cat, Dog, Bird } from 'lucide-react';
import './App.css';

const App = () => {
  const [currentStory, setCurrentStory] = useState('');
  const [storyType, setStoryType] = useState('adventure');
  const [characterName, setCharacterName] = useState('Luna');
  const [character, setCharacter] = useState('bunny');
  const [isGenerating, setIsGenerating] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [showStars, setShowStars] = useState(true);

  const storyTypes = [
    { id: 'adventure', name: 'Adventure', icon: TreePine },
    { id: 'magical', name: 'Magical', icon: Sparkles },
    { id: 'friendship', name: 'Friendship', icon: Heart },
    { id: 'underwater', name: 'Underwater', icon: Fish },
    { id: 'castle', name: 'Castle', icon: Castle }
  ];

  const characters = [
    { id: 'bunny', name: 'Bunny', icon: Rabbit, emoji: '🐰' },
    { id: 'cat', name: 'Cat', icon: Cat, emoji: '🐱' },
    { id: 'dog', name: 'Dog', icon: Dog, emoji: '🐶' },
    { id: 'bird', name: 'Bird', icon: Bird, emoji: '🐦' },
  ];

const stories = {
    adventure: {
      bunny: `Once upon a time, there was a brave little bunny named ${characterName} who lived at the edge of the Whispering Woods. ${characterName} had the softest brown fur and the most curious nature.

One starry evening, ${characterName} discovered a glowing acorn that had fallen from the ancient oak tree. As soon as ${characterName} picked it up, the acorn whispered, "Help me find my way home to the Tree of Dreams."

${characterName} tucked the magical acorn safely in a small pouch and began the journey through the moonlit forest. Along the way, ${characterName} met a wise old owl who pointed toward the distant mountains where the Tree of Dreams grew.

Through babbling brooks and over gentle hills, ${characterName} traveled all night. When the first rays of dawn appeared, there stood the magnificent Tree of Dreams, its branches twinkling with starlight even in daylight.

${characterName} placed the acorn at the base of the tree, and suddenly, hundreds of dream-fireflies emerged, dancing around ${characterName} in gratitude. The tree granted ${characterName} one special wish - the ability to help other forest creatures find their way home whenever they were lost.

From that day forward, ${characterName} became known as the Guardian of Lost Things, helping everyone in the forest find their way. And every night, ${characterName} would fall asleep under the stars, knowing that kindness always leads to the most wonderful adventures.`,
      
      cat: `In a cozy village by the sea lived a clever cat named ${characterName}, whose whiskers could sense the wind's secrets and whose green eyes sparkled with mischief and wisdom.

One evening, as ${characterName} was watching the sunset from the harbor, a tiny paper boat floated to shore with a message inside: "The Lighthouse of Lost Ships needs help - signed, Captain Finn."

${characterName} had heard tales of the magical lighthouse that guided lost ships safely home, but it had been dark for many moons. Without hesitation, ${characterName} set off along the rocky coastline toward the mysterious lighthouse.

The journey led through tide pools filled with singing shells and across sand dunes that sparkled like diamonds in the moonlight. At the lighthouse, ${characterName} found an old sea captain's ghost who explained that the lighthouse crystal had lost its glow.

Using quick thinking and nimble paws, ${characterName} climbed to the very top of the lighthouse and discovered that the crystal just needed to be turned toward the North Star. With a mighty push, ${characterName} rotated the crystal, and instantly, warm golden light flooded the sea.

That night, three lost fishing boats found their way safely home, guided by the lighthouse beam. Captain Finn's grateful spirit granted ${characterName} the gift of always knowing the safest path, whether on land or sea.

${characterName} returned to the village as a hero, and from then on, whenever storms threatened, the lighthouse would glow extra bright, as if ${characterName}'s courage had made it stronger forever.`,
      
      dog: `${characterName} was a golden retriever with a heart as warm as sunshine and a nose that could follow any trail, no matter how faint.

One crisp autumn morning, ${characterName} discovered that all the colorful leaves in Maple Grove had turned gray overnight. The forest animals were worried - without the beautiful autumn colors, how would they prepare for winter?

${characterName} followed a mysterious silver trail deep into the woods, where it led to a clearing with an ancient stone fountain. Sitting beside it was a sad little fairy who had accidentally used up all her color magic trying to paint the sunrise extra beautiful.

"I wanted to make the most gorgeous sunrise ever," the fairy explained, "but now I have no colors left for the autumn leaves, and winter is coming soon!"

${characterName} had an idea. Racing back to the village, ${characterName} gathered children's old crayons, fallen flower petals, and even some colorful autumn berries. Bringing them all back to the fairy, ${characterName} showed her that color could be found everywhere, not just made by magic.

Together, they created a special mixture in the fountain. The fairy's magic, combined with all the natural colors ${characterName} had found, created the most beautiful rainbow mist that settled on every tree in the forest.

The leaves turned the most magnificent shades of red, orange, yellow, and gold anyone had ever seen. The grateful fairy gave ${characterName} a special collar that would always help lost things find their true colors again.

${characterName} returned home as the Hero of Autumn, and every year since, the leaves in Maple Grove have been the most beautiful in all the land.`,
      
      bird: `High above the clouds lived ${characterName}, a small but mighty bird with feathers that shimmered like rainbows and a song that could calm any storm.

One day, ${characterName} noticed that the wind had stopped blowing everywhere in the valley below. Without wind, the flowers couldn't spread their seeds, the windmills couldn't turn, and worst of all, no other birds could fly.

${characterName} soared higher and higher until reaching the Palace of Winds, where the Wind King sat looking very sad. "I've lost my magic Wind Flute," he explained. "Without it, I cannot make the breezes blow."

The flute had fallen somewhere in the vast Cloud Canyon, a dangerous place where storm clouds gathered and lightning danced. But ${characterName} was determined to help and dove bravely into the swirling mists.

Flying through rain and hail, dodging lightning bolts and navigating thick fog, ${characterName} searched every cloud and canyon ledge. Finally, nestled in a nest of storm petrels, ${characterName} found the silver flute, being guarded by a mother bird who thought it was a shiny gift for her babies.

${characterName} gently explained the situation, and the storm petrel family gladly returned the flute, asking only that ${characterName} visit them sometimes to share songs.

When ${characterName} returned the flute to the Wind King, gentle breezes immediately began flowing through the valley again. As a reward, the Wind King gave ${characterName} the gift of the Four Winds - the ability to call upon North, South, East, or West wind whenever needed.

From that day forward, ${characterName} became the Valley's Weather Helper, ensuring that just the right amount of wind always blew to keep everyone happy and healthy.`
    },
    
    magical: {
      bunny: `In the heart of the Enchanted Meadow lived ${characterName}, a small bunny with fur as white as moonbeams and eyes that sparkled with wonder.

Every night, ${characterName} would watch the stars and make wishes, but tonight was different - one of the stars winked back! The star drifted down and introduced herself as Stella, a Star Guardian who had lost her way home to the Constellation Castle.

"Without me," Stella explained sadly, "the constellation of the Great Carrot cannot shine, and all the garden vegetables in the world will forget how to grow."

${characterName} knew this was a job for someone very special, and decided to help Stella find her way back to the sky. Together, they searched for the legendary Rainbow Bridge that connects Earth to the stars.

Their journey took them through the Singing Garden, where flowers hummed lullabies, and across the Mirror Lake, where the water showed not reflections, but dreams. Finally, at the top of Wish Hill, they found the beginning of the Rainbow Bridge, shimmering in seven magical colors.

As they crossed the bridge, ${characterName} felt lighter and lighter until they were both floating among the clouds. The Constellation Castle appeared before them, made entirely of crystallized starlight and cosmic dust.

The Star Queen was so grateful to have Stella back that she made ${characterName} an Honorary Star Guardian, with the special power to make one wish come true each night by touching nose to the North Star.

${characterName} chose to use this power not for personal wishes, but to grant the dreams of other forest creatures, making the Enchanted Meadow the most magical place in all the land.`,
      
      cat: `${characterName} was a mysterious silver cat who lived in the Tower of Whiskers, where magic books floated freely and cauldrons stirred themselves.

One mysterious evening, all the magic in the tower began disappearing - spells fizzled out, potions turned to water, and even ${characterName}'s ability to understand the language of shadows was fading away.

Following a trail of shimmering purple sparkles, ${characterName} discovered that a mischievous Magic Imp had been collecting all the enchantments in the land to build his own personal rainbow. The imp had no idea that taking magic from others would make it fade away entirely.

${characterName} found the imp's hideout in a hollow tree, where thousands of stolen spells swirled around in a chaotic, colorless mess. The poor imp was crying because his rainbow had turned gray and lifeless.

Using wisdom and kindness instead of force, ${characterName} explained to the imp that magic works best when it's shared, not hoarded. Together, they began sorting through all the stolen spells and returning them to their rightful owners.

As each spell returned home, it grew brighter and more beautiful. The imp's rainbow began to glow again too, but this time with colors borrowed willingly from friends all over the magical realm.

The grateful Magic Imp gave ${characterName} a special collar made of woven starlight that would let ${characterName} see the true magic hidden in everyday moments - the magic of friendship, kindness, and wonder.

From that day on, ${characterName} became the Keeper of True Magic, helping others discover that the most powerful enchantments come from the heart.`,
      
      dog: `${characterName} was a golden dog with a tail that wagged like a magic wand and a bark that sounded like tiny silver bells ringing.

One morning, ${characterName} woke up to find that all the colors in Dreamtown had started swirling around like a rainbow tornado! The Magic Color Wheel that kept all colors in their proper places had broken, and now everything was changing colors every few seconds.

The Mayor's purple hat was now bright orange, the fire truck was cotton candy pink, and even ${characterName}'s golden fur kept changing from blue to green to red! This was making everyone very dizzy and confused.

${characterName} followed the swirling colors to their source - the workshop of Iris the Color Keeper, a kindly wizard who looked very embarrassed about the whole situation. "I was trying to invent new colors," he explained, "but I accidentally broke the Color Wheel instead!"

The broken wheel pieces were scattered all across the Rainbow Fields, each piece guarded by a different magical creature who thought the pretty, sparkly fragments were gifts just for them.

${characterName} went on a quest to collect all the pieces, but instead of taking them by force, ${characterName} made friends with each guardian and explained how important it was to share the colors with everyone.

The Unicorn, the Phoenix, the Crystal Butterfly, and even the grumpy Dragon all happily gave up their pieces when they understood that everyone in Dreamtown needed colors to be happy.

When Iris repaired the Color Wheel, he was so impressed with ${characterName}'s kindness that he granted ${characterName} a special gift - the ability to bring color to anyone's gray day just by being a loyal, loving friend.`,
      
      bird: `${characterName} was a tiny hummingbird with wings that beat so fast they created tiny rainbows in the air and a heart full of courage bigger than eagles.

One dawn, ${characterName} discovered that the Sun had forgotten how to rise! It sat sadly on the horizon, too tired and discouraged to climb into the sky. Without the Sun, all the flowers were starting to close, and the whole world was growing cold and dim.

${characterName} flew up to speak with the Sun, who explained that he had been working so hard to bring light and warmth to everyone that he had forgotten what made him feel bright and happy inside.

"I give and give," the Sun said sadly, "but I've forgotten what brings me joy. Without joy, I cannot shine."

${characterName} had an idea. Flying swiftly around the world, ${characterName} collected the most beautiful sights, sounds, and acts of kindness from everywhere - children's laughter, flowers blooming, friends helping each other, and families sharing meals together.

Returning to the Sun, ${characterName} shared all these wonderful moments, reminding the Sun of all the happiness his light made possible. With each story, the Sun began to glow a little brighter.

When ${characterName} finished sharing, the Sun was so moved by all the beauty and love in the world that he burst into the most glorious sunrise ever seen, painting the sky in brilliant golds, pinks, and oranges.

As a thank you, the Sun granted ${characterName} the gift of Eternal Dawn - wherever ${characterName} flew, hope and new beginnings would follow, helping everyone remember that each day brings fresh possibilities for joy and wonder.`
    },
    
    friendship: {
      bunny: `${characterName} was a gentle bunny who lived in a burrow decorated with pressed flowers and always kept an extra carrot ready for unexpected visitors.

One rainy day, ${characterName} heard soft crying coming from the old oak tree. Investigating carefully, ${characterName} found a small hedgehog named Pip, all wet and shivering, who had lost his way home in the storm.

"I was trying to find the Perfect Acorn to give to my grandmother for her birthday," Pip sniffled. "But now I'm lost, the rain washed away my scent trail, and I'll never find my way back."

${characterName} immediately invited Pip into the warm, dry burrow and shared some hot chamomile tea and fresh berries. While Pip dried off, ${characterName} listened carefully to his story and began forming a plan.

"I know where the Perfect Acorns grow," ${characterName} said kindly, "and I know all the paths through these woods. But more importantly, I think your grandmother would love any gift that comes from your heart."

Together, they waited for the rain to stop, then set off on an adventure to find both the Perfect Acorn and Pip's home. Along the way, they helped a family of field mice fix their flooded burrow and shared their umbrella with a cold butterfly.

When they finally found Pip's grandmother, she was so happy to meet ${characterName} that she invited them both for birthday cake. "The best gift," she told Pip, "is that you made such a wonderful friend."

From that day forward, ${characterName} and Pip were inseparable, proving that the most beautiful friendships often begin with a simple act of kindness on a rainy day.`,
      
      cat: `${characterName} was a tabby cat who spent sunny afternoons reading in the town library and always remembered everyone's favorite stories.

One day, a new family moved into the house next door, bringing with them a very shy kitten named Whiskers who hid under the porch and wouldn't come out to play with anyone.

${characterName} could see Whiskers peeking out sometimes, looking lonely but too scared to make friends. Instead of forcing Whiskers to come out, ${characterName} had a gentler idea.

Every day, ${characterName} would sit just close enough to the porch to be seen, and read interesting stories out loud - tales of brave knights, magical adventures, and faraway places. At first, only Whiskers' ears were visible, but gradually, more and more of the shy kitten appeared.

After a week of story time, Whiskers finally crept out and sat quietly nearby to listen better. ${characterName} pretended not to notice at first, just kept reading, until Whiskers felt brave enough to ask, "What happens next?"

That question led to the most wonderful friendship. ${characterName} and Whiskers discovered they both loved mysteries, both enjoyed chasing butterflies, and both had a secret dream of writing their own adventure stories someday.

Together, they started the Neighborhood Story Club, where all the local pets could come share tales and make new friends. Whiskers, once too shy to speak, became the best storyteller of all.

${characterName} learned that sometimes the best way to make a friend is simply to be patient, kind, and show that you care about the things that matter to them.`,
      
      dog: `${characterName} was a friendly golden retriever who believed that every day was a good day to make a new friend and never met a problem that couldn't be solved with teamwork.

At the local dog park, ${characterName} noticed that Rex, a big German Shepherd, always sat alone by the fence while all the other dogs played together. Rex looked like he wanted to join in, but something was holding him back.

${characterName} bounced over with a tennis ball and asked, "Want to play fetch?" But Rex shook his head sadly. "I'm too big and clumsy," he said. "Last time I tried to play with the small dogs, I accidentally knocked them over. Everyone thinks I'm scary."

${characterName} had an idea. "What if we played a game where being big and strong is exactly what we need?" ${characterName} had noticed that the park's frisbees often got stuck in the tall trees, and none of the smaller dogs could reach them.

Working together, ${characterName} would spot the stuck toys while Rex used his height and strength to retrieve them. Soon, they had rescued seventeen frisbees, four tennis balls, and even a kite that belonged to some grateful children.

All the other dogs were so impressed and thankful that they asked Rex to be the official "High Rescue Specialist" of the dog park. Rex realized that what made him different wasn't a problem - it was his special superpower.

From that day on, Rex and ${characterName} were the best of friends, and Rex became one of the most popular dogs at the park. Everyone learned that the best teams are made of friends with different strengths who help each other shine.`,
      
      bird: `${characterName} was a cheerful robin with a song for every season and a belief that no one should ever have to face their troubles alone.

One autumn morning, ${characterName} noticed that Oliver, an old owl who lived in the big elm tree, hadn't been seen in days. All the other birds were too busy preparing for winter migration to check on him.

${characterName} flew up to Oliver's tree hollow and found the old owl looking very sad and tired. "What's wrong?" ${characterName} asked gently.

"Winter is coming," Oliver sighed, "and for the first time in fifty years, I won't be able to stay awake to watch over the forest at night. My eyes aren't as sharp as they used to be, and I'm getting too old for night watch duty."

${characterName} thought carefully. "What if you didn't have to do it alone? What if we worked together?"

Over the next few days, ${characterName} organized all the forest birds into the Friendship Night Watch. The early birds would take the dawn shift, the daytime singers would cover afternoon, and the night owls (with Oliver as their wise leader) would handle the dark hours.

But the most special part was that ${characterName} learned to stay up late specifically to keep Oliver company during the loneliest part of the night shift. They would sit together, sharing stories and songs, making the long winter nights feel warm and friendly.

When spring came, Oliver told everyone that it had been his happiest winter ever. "I learned," he said, "that getting older doesn't mean getting lonelier, if you have true friends who care about you."

${characterName} and Oliver remained the closest of friends, proving that age is just a number when hearts are connected by kindness.`
    },
    
    underwater: {
      bunny: `${characterName} was a very special bunny who lived by Crystal Lake and had always dreamed of exploring the mysterious underwater world, even though bunnies weren't known for swimming.

One evening, while sipping water at the lake's edge, ${characterName} noticed something magical - a tiny seahorse trapped in the shallow water, too far from the deep lake to swim home safely.

"Please help me," squeaked the seahorse, whose name was Coral. "I got lost during the storm last night, and now I can't find my way back to the Underwater Garden where my family lives."

${characterName} wanted to help, but there was one big problem - bunnies can't breathe underwater! Just then, a wise old turtle surfaced and offered a solution.

"I have magic bubble shells," said the turtle, "left over from my adventuring days. They'll let you breathe underwater for one hour - just enough time to help your new friend."

With a shimmering bubble around ${characterName}'s head, they dove into the crystal-clear water together. The underwater world was more beautiful than ${characterName} had ever imagined - forests of swaying seaweed, schools of rainbow fish, and coral castles sparkling in the filtered sunlight.

Following Coral's directions, they swam through the Whispering Kelp Forest and across the Sandy Desert (where underwater tumbleweeds rolled by), until they reached the Underwater Garden - a magical place where sea anemones grew like flowers and starfish sparkled like jewels.

Coral's family was so grateful that they gave ${characterName} a special pearl that would always allow underwater breathing. But the most precious gift was the friendship that grew between the land bunny and the sea creatures.

From then on, ${characterName} became the official Land-Sea Ambassador, helping connect the two worlds and proving that friendship knows no boundaries.`,
      
      cat: `${characterName} was a clever cat with silver fur like moonlight on water, who lived in a lighthouse by the sea and had always been curious about the mysteries hidden beneath the waves.

One foggy morning, a distressed whale song echoed across the harbor. Using keen feline hearing, ${characterName} realized it was a call for help from somewhere deep in the ocean.

A dolphin named Echo appeared at the harbor's edge and explained the problem: "The Great Coral Library is in danger! A school of confused electric eels accidentally wrapped themselves around the ancient coral shelves, and their electricity is making all the sea creatures too scared to come near."

${characterName} had heard legends of the Coral Library - an underwater repository of ocean wisdom where every sea story was recorded in living coral books. If it was destroyed, thousands of years of ocean knowledge would be lost forever.

Echo offered to share her dolphin breath magic with ${characterName}, creating a temporary air bubble that would allow underwater exploration. Together, they dove deep into the blue-green depths of the ocean.

The Coral Library was magnificent - towering shelves of rainbow coral, each one inscribed with glowing symbols that told the stories of the sea. But sure enough, confused electric eels were wrapped around several sections, their nervous electricity crackling through the water.

Using feline intelligence and patience, ${characterName} realized the eels weren't being mean - they were just lost and scared. By gently guiding them one at a time back to their home in the Electric Canyon, ${characterName} safely freed the library.

The grateful sea creatures made ${characterName} the first land-dwelling Honorary Librarian of the Coral Library, with the power to visit anytime using Echo's friendship magic.

${characterName} spent many happy hours reading coral books and learning the ancient wisdom of the sea, bridging the gap between ocean and shore.`,
      
      dog: `${characterName} was a brave water-loving dog who spent every morning running along Sunset Beach, always ready for adventure and never afraid of getting wet.

One day while playing in the tide pools, ${characterName} discovered a message in a bottle that read: "Help! The Underwater Music Festival has gone silent! - Marina the Mermaid." 

${characterName} had heard of the legendary festival where all sea creatures gathered once a year to share their most beautiful songs, but something had clearly gone wrong.

A friendly sea otter named Splash heard ${characterName} barking at the waves and swam over to help. "I know about this!" Splash said. "The Giant Conch Shell that amplifies all the underwater music has sunk too deep in Melody Trench. None of us are strong enough swimmers to retrieve it."

Without hesitation, ${characterName} dove into the waves. Using powerful doggy-paddle strokes and following Splash's directions, they swam deeper than any dog had ever gone before, down to where the water turned deep blue and mysterious.

At the bottom of Melody Trench, the Giant Conch Shell lay partially buried in soft sand, still glowing with musical magic but too heavy for sea creatures to lift. ${characterName}'s strong jaws and determination proved perfect for the job.

Swimming back to the surface with the precious shell, ${characterName} was greeted by hundreds of cheering sea creatures. When Marina the Mermaid blew into the shell, the most beautiful music filled the ocean, and the festival resumed with songs of joy and celebration.

As a thank-you gift, Marina gave ${characterName} a special collar made of singing sea glass that would always allow communication with ocean friends.

From that day forward, ${characterName} became the official Beach Guardian, protecting the connection between land and sea and ensuring that the music of the ocean would never be silenced.`,
      
      bird: `${characterName} was a graceful seabird with wings like sails and eyes sharp enough to spot a fish from a hundred feet in the air, who spent days soaring above the endless blue ocean.

While flying over Dolphin Bay, ${characterName} noticed something troubling - all the colorful tropical fish that usually created beautiful living rainbows in the water had mysteriously disappeared, leaving the coral reef looking gray and lifeless.

Diving down to investigate, ${characterName} met Finn, a worried clownfish who was one of the few fish remaining. "They've all gone to hide in the Deep Dark Cave," Finn explained sadly. "A mean sea monster moved into our reef and scared everyone away."

${characterName} flew to the entrance of the Deep Dark Cave, where hundreds of tropical fish were huddled together, too frightened to return home. "We miss the sunlight and the warm currents," they said, "but we're too scared to go back."

Determined to solve this problem, ${characterName} flew back to investigate the "sea monster." What ${characterName} discovered was surprising - it wasn't a monster at all, but a giant octopus named Ollie who was crying big, salty tears.

"I just wanted to make friends," Ollie sobbed. "But every time I wave my tentacles to say hello, everyone swims away screaming. I'm not scary - I'm just lonely!"

${characterName} had a brilliant idea. Flying back and forth between Ollie and the hidden fish, ${characterName} organized a proper introduction. When the fish realized that Ollie was friendly, they welcomed him as the reef's new neighbor.

Ollie turned out to be wonderful at helping with reef maintenance - using his tentacles to clean hard-to-reach places and his intelligence to solve problems. The coral reef became more beautiful and well-organized than ever before.

${characterName} became known as the Great Peacemaker of the Sea, always ready to help resolve misunderstandings and bring different ocean communities together in harmony.`
    },
    
    castle: {
      bunny: `${characterName} was a small bunny with a big heart who lived in the meadow below the mysterious Moonstone Castle, where no one had lived for a hundred years.

One night, ${characterName} saw a single candle flickering in the castle's highest tower window. The next morning, ${characterName} found a tiny scroll tied with golden ribbon that had blown down from the castle, containing a message: "Seeking a friend for tea and stories. -Princess Luna"

Despite everyone in the village saying the castle was haunted, ${characterName} felt sure that anyone who liked tea and stories couldn't be scary. So that evening, ${characterName} hopped up the winding path to the castle's great wooden door.

The door opened by itself (which was a little startling), but inside, ${characterName} found the most beautiful castle library ever imagined - walls lined with thousands of books, comfortable reading chairs by a warm fireplace, and floating teacups that served themselves.

Princess Luna appeared from behind a bookshelf - not a scary ghost, but a lonely young princess who had been under a sleeping spell for a hundred years and had only just awakened to find her kingdom empty and all her friends long gone.

"I've been so lonely," Princess Luna said sadly. "I love reading and learning, but books are much more fun when you have someone to share them with."

${characterName} and Princess Luna spent the evening reading fairy tales to each other, sharing stories about their different worlds, and laughing over magical tea that tasted like whatever flavor you were wishing for.

They became the very best of friends. ${characterName} would visit the castle every few days, and sometimes Princess Luna would use her magic to shrink down to bunny size and visit the meadow to see how regular folk lived.

Together, they decided to turn part of the castle into a library and story-sharing center for all the village children, bringing joy and learning back to the Moonstone Castle after its hundred years of silence.`,
      
      cat: `${characterName} was a sophisticated cat with excellent manners who lived in the village and had always been curious about the elegant Sapphire Castle that stood majestically on the hill.

One day, a golden invitation appeared on ${characterName}'s windowsill: "The Royal Court requests your presence for the Annual Tournament of Wits. Your reputation for cleverness has reached Our ears. -King Whiskers the Wise"

${characterName} was surprised but honored. No one from the village had ever been invited to the castle before! Putting on the finest collar available, ${characterName} made the journey up the cobblestone path to the castle gates.

Inside, ${characterName} discovered that Sapphire Castle was entirely populated by the most refined and intelligent cats from around the world - Persian cats who spoke seven languages, Siamese cats who were master philosophers, and Maine Coons who had written epic poems.

The Tournament of Wits consisted of riddle contests, strategic games, and storytelling competitions. ${characterName} was nervous at first, surrounded by such learned company, but soon discovered that street smarts and a kind heart were just as valuable as formal education.

In the final challenge, contestants had to solve the mystery of the Missing Crown Jewels. While others searched through books and ancient maps, ${characterName} used practical detective skills - following scent trails, noticing small details, and thinking like a cat.

${characterName} discovered that the "missing" jewels weren't stolen at all - they had simply fallen behind a bookshelf when a young kitten prince was playing. ${characterName}'s down-to-earth approach had solved what the most scholarly cats could not.

King Whiskers was so impressed that he appointed ${characterName} as the Royal Detective, with the special job of using common sense and practical wisdom to help solve the kingdom's everyday problems.

${characterName} learned that true intelligence comes in many forms, and that every perspective - whether from castle or cottage - has value.`,
      
      dog: `${characterName} was a loyal and brave dog who worked as the village mail carrier, known for always delivering letters safely, no matter the weather or distance.

One stormy morning, ${characterName} received an urgent letter addressed to "The Bravest Heart in the Village" with a return address from Courage Castle. Inside was a plea for help from Sir Barkington, the castle's guard dog, who was getting too old to protect the castle properly.

"I need someone trustworthy to help me train the new guard puppies," the letter explained. "The castle's Royal Family is kind but the young princes and princesses are always getting into mischief, and I need a helper with patience, wisdom, and a brave heart."

${characterName} had never been inside a real castle before, but the idea of helping train puppies and protecting a royal family sounded like the most important job ever. So, with mail bag secured, ${characterName} set off for Courage Castle.

The castle was magnificent, with tall towers, a drawbridge, and gardens full of roses. Sir Barkington was a distinguished old bulldog who welcomed ${characterName} warmly and introduced the challenge: three adorable but very energetic puppies who were supposed to be guard dogs but mostly just wanted to play.

${characterName} discovered that the best way to train the puppies was to make learning fun - turning patrol routes into games of follow-the-leader, teaching them to "sit" and "stay" by making it into a musical chairs-style competition, and showing them that protecting the royal children was the most fun job of all.

The training was so successful that when a group of bandits tried to sneak into the castle, the puppies (following ${characterName}'s example) worked as a perfect team - some ran to get help, others surrounded the intruders, and one very clever puppy howled an alarm that woke the whole castle.

The grateful Royal Family appointed ${characterName} as the Official Castle Trainer, with a special uniform and the job of teaching young guard animals throughout the kingdom that courage, teamwork, and kindness make the strongest protectors of all.`,
      
      bird: `${characterName} was a small but mighty songbird with a voice that could carry messages across great distances and a heart full of dreams about exploring grand places.

One misty morning, ${characterName} found a tiny scroll tied to a tree branch with a message written in elegant script: "Seeking a Royal Messenger for the Crystal Castle. Must have clear voice, brave spirit, and kind heart. Apply at the castle's Song Tower."

${characterName} had always dreamed of seeing the legendary Crystal Castle, where it was said that every wall was made of singing crystal and music filled the air both day and night. Without hesitation, ${characterName} flew toward the distant mountain where the castle sparkled like a jewel.

The Crystal Castle was even more magical than the stories described. The walls hummed gentle melodies, the windows chimed like wind bells, and everywhere ${characterName} looked, light danced in rainbow patterns through the crystal surfaces.

At the Song Tower, ${characterName} met Queen Melody, a graceful swan who explained the important job: "Our castle's magic depends on music and communication. We need a Royal Messenger who can carry songs, news, and messages between all the kingdoms, helping maintain harmony throughout the land."

The test was challenging - ${characterName} had to memorize and perfectly deliver a complex musical message to the neighboring Wind Kingdom, then bring back their reply song without changing a single note.

Flying swiftly through clouds and over mountains, ${characterName} successfully delivered the intricate melody to the Wind Kingdom's Monarch, who was so impressed by the perfect delivery that he composed a beautiful response song filled with gratitude and friendship.

When ${characterName} returned and sang the reply perfectly, Queen Melody was delighted. "You have proven yourself to be not just a messenger, but a bridge between kingdoms, carrying not just words but the feelings and friendship behind them."

${characterName} was appointed as the Crystal Castle's Official Royal Messenger, with a special crystal pendant that would help amplify songs across any distance and ensure that messages of peace, friendship, and harmony could always find their way to where they were needed most.

From that day forward, ${characterName} flew proudly between castles and kingdoms, knowing that every song carried and every message delivered helped keep the world a little more connected and peaceful.`
    }
  };
  

  // Animation for floating stars
  useEffect(() => {
    if (showStars) {
      const timer = setInterval(() => {
        setShowStars(false);
        setTimeout(() => setShowStars(true), 50);
      }, 3000);
      return () => clearInterval(timer);
    }
  }, [showStars]);

  const generateStory = () => {
    setIsGenerating(true);
    setTimeout(() => {
      const selectedStory = stories[storyType]?.[character] || stories.adventure.bunny;
      setCurrentStory(selectedStory);
      setIsGenerating(false);
    }, 2000);
  };

  const selectedCharacter = characters.find(c => c.id === character);
  const selectedStoryType = storyTypes.find(t => t.id === storyType);

  return (
    <div className={`min-h-screen transition-all duration-1000 ${
      darkMode 
        ? 'bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900' 
        : 'bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100'
    }`}>
      {/* Floating Stars Animation */}
      {darkMode && (
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <Star
              key={i}
              className={`absolute text-yellow-200 transform transition-all duration-1000 ${
                showStars ? 'opacity-60 scale-100' : 'opacity-20 scale-75'
              }`}
              size={Math.random() * 8 + 8}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      )}

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Moon className={`${darkMode ? 'text-yellow-200' : 'text-purple-600'} transition-colors`} size={48} />
            <h1 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'} transition-colors`}>
              Bedtime Stories
            </h1>
            <Book className={`${darkMode ? 'text-yellow-200' : 'text-purple-600'} transition-colors`} size={48} />
          </div>
          
          {/* Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`px-4 py-2 rounded-full transition-all duration-300 ${
              darkMode 
                ? 'bg-yellow-400 text-gray-900 hover:bg-yellow-300' 
                : 'bg-purple-600 text-white hover:bg-purple-700'
            }`}
          >
            {darkMode ? '☀️ Day Mode' : '🌙 Night Mode'}
          </button>
        </div>

        {/* Story Customization */}
        <div className={`max-w-4xl mx-auto mb-8 p-6 rounded-2xl shadow-xl transition-all duration-300 ${
          darkMode 
            ? 'bg-gray-800/50 backdrop-blur border border-purple-500/30' 
            : 'bg-white/80 backdrop-blur border border-purple-200'
        }`}>
          <h2 className={`text-2xl font-semibold text-center mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            Create Your Perfect Story
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Character Name Input */}
            <div>
              <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                Character Name
              </label>
              <input
                type="text"
                value={characterName}
                onChange={(e) => setCharacterName(e.target.value || 'Luna')}
                placeholder="Enter a name..."
                className={`w-full px-4 py-3 rounded-xl border transition-all duration-200 ${
                  darkMode 
                    ? 'bg-gray-700/50 border-purple-400/30 text-white placeholder-gray-400 focus:border-purple-400' 
                    : 'bg-white border-purple-200 text-gray-800 placeholder-gray-500 focus:border-purple-400'
                } focus:ring-2 focus:ring-purple-400/20 focus:outline-none`}
              />
            </div>

            {/* Character Selection */}
            <div>
              <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                Character Type
              </label>
              <div className="grid grid-cols-2 gap-2">
                {characters.map((char) => {
                  return (
                    <button
                      key={char.id}
                      onClick={() => setCharacter(char.id)}
                      className={`p-3 rounded-xl border-2 transition-all duration-200 flex flex-col items-center gap-1 ${
                        character === char.id
                          ? (darkMode 
                              ? 'border-purple-400 bg-purple-400/20 text-purple-200' 
                              : 'border-purple-500 bg-purple-100 text-purple-700')
                          : (darkMode 
                              ? 'border-gray-600 hover:border-purple-400/50 text-gray-300 hover:text-purple-200' 
                              : 'border-gray-200 hover:border-purple-300 text-gray-600 hover:text-purple-600')
                      }`}
                    >
                      <span className="text-2xl">{char.emoji}</span>
                      <span className="text-xs font-medium">{char.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Story Type Selection */}
            <div>
              <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                Story Theme
              </label>
              <div className="space-y-2">
                {storyTypes.map((type) => {
                  const IconComponent = type.icon;
                  return (
                    <button
                      key={type.id}
                      onClick={() => setStoryType(type.id)}
                      className={`w-full p-2 rounded-lg border transition-all duration-200 flex items-center gap-3 ${
                        storyType === type.id
                          ? (darkMode 
                              ? 'border-purple-400 bg-purple-400/20 text-purple-200' 
                              : 'border-purple-500 bg-purple-100 text-purple-700')
                          : (darkMode 
                              ? 'border-gray-600 hover:border-purple-400/50 text-gray-300 hover:text-purple-200' 
                              : 'border-gray-200 hover:border-purple-300 text-gray-600 hover:text-purple-600')
                      }`}
                    >
                      <IconComponent size={20} />
                      <span className="font-medium">{type.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Generate Story Button */}
          <div className="text-center mt-6">
            <button
              onClick={generateStory}
              disabled={isGenerating}
              className={`px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
                darkMode
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white shadow-lg shadow-purple-500/25'
                  : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white shadow-lg shadow-purple-600/25'
              } disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none`}
            >
              {isGenerating ? (
                <div className="flex items-center gap-3">
                  <Sparkles className="animate-spin" size={24} />
                  Creating Your Story...
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <Sparkles size={24} />
                  Generate Bedtime Story
                </div>
              )}
            </button>
          </div>
        </div>

        {/* Story Display */}
        {currentStory && (
          <div className={`max-w-4xl mx-auto p-8 rounded-2xl shadow-xl transition-all duration-500 ${
            darkMode 
              ? 'bg-gray-800/50 backdrop-blur border border-purple-500/30' 
              : 'bg-white/90 backdrop-blur border border-purple-200'
          }`}>
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="text-3xl">{selectedCharacter?.emoji}</span>
              <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                {characterName}'s {selectedStoryType?.name} Adventure
              </h2>
              <span className="text-3xl">{selectedCharacter?.emoji}</span>
            </div>
            
            <div className={`prose prose-lg mx-auto leading-relaxed ${
              darkMode ? 'text-gray-100' : 'text-gray-700'
            }`}>
              {currentStory.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4 text-justify">
                  {paragraph}
                </p>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${
                darkMode ? 'bg-purple-500/20 text-purple-200' : 'bg-purple-100 text-purple-700'
              }`}>
                <Heart size={20} />
                <span className="font-medium">Sweet Dreams!</span>
                <Heart size={20} />
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className={`text-center mt-12 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          <p className="text-sm">
            ✨ Every story is unique and magical, just like you! ✨
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;