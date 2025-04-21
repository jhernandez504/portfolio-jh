export default function About() {
  return (
      <section className="px-4 py-12 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-white text-center">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-white">
              My name is Jeremy Hernandez. I was born and raised in New Orleans—a city stitched together by rhythm, resilience, and reinvention. It’s a place where beauty and struggle coexist in every corner. I grew up surrounded by its pulse: the brass bands in the streets, the quiet weight of its history, the creativity that seeps through the cracks like light through storm-shuttered windows.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <img src="/images/self1.jpeg" alt="New Orleans" className="w-full h-full object-cover max-w-[400px] rounded-xl shadow-md opacity-80" />
          </div>

          <div>
            <p className="text-white">
              From a young age, I found my escape and my spark in games. Not just to play, but to wonder. Pokémon Red was my first adventure. Street Fighter, Mortal Kombat, Super Smash Bros Melee—each taught me about strategy, design, and chaos. League of Legends wasn’t moddable, but it was where I pushed my limits daily—where discipline, learning from failure, and quick decision-making shaped how I approached challenges. And then came Valheim, where mods opened a new door: I wasn’t just playing—I was tinkering, customizing, reshaping the world around me for myself and my friends.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <img src="/images/self2.jpg" alt="Gaming journey" className="w-full h-full object-cover max-w-[400px] rounded-xl shadow-md opacity-80" />
          </div>

          <div>
            <p className="text-white">
              Before code, I chased color. Art was my first language—drawing in school notebooks, sketching characters and logos, exploring perspective and form. I majored in Art and Graphic Design at the University of New Orleans. But somewhere between the canvas and the code editor, I started asking a different question: not just what makes things beautiful—but how do they work?
            </p>
          </div>
          <div className="flex justify-center items-center">
            <img src="/images/self3.jpg" alt="Art & design" className="w-full h-full object-cover max-w-[400px] rounded-xl shadow-md opacity-80" />
          </div>

          <div>
            <p className="text-white">
              That question became an obsession. I took Java and assembly classes out of curiosity, not credits. I wanted to understand the systems behind the screens. I wanted to peel back the interface and see what made it breathe.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <img src="/images/self4.jpg" alt="Coding curiosity" className="w-full h-full object-cover max-w-[400px] rounded-xl shadow-md opacity-80" />
          </div>

          <div>
            <p className="text-white">
              Eventually, I made the leap. I enrolled at Operation Spark in New Orleans, where I immersed myself in the world of software development—JavaScript, functional programming, full stack applications. It wasn’t easy. But I’d already learned to love the process of creation: the sketch becoming a design, the game becoming an experience, the idea becoming a system.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <img src="/images/self5.jpg" alt="Operation Spark" className="w-full h-full object-cover max-w-[400px] rounded-xl shadow-md opacity-80" />
          </div>

          <div className="md:col-span-2">
            <p className="text-white">
              I don’t write code just to make things work. I write code to shape experiences, to solve problems with empathy, and to leave behind something that feels intentional. I believe in a glass-half-full world—one where energy is better spent on what we can change, rather than what we can’t.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <img src="/images/self6.jpg" alt="Operation Spark" className="w-full h-full object-cover max-w-[400px] rounded-xl shadow-md opacity-80" />
          </div>
          <div>
            <p className="text-white mt-4">
              What drives me now is simple but deep: becoming the best version of myself—for me, and for my son. He's two now, and every day I think about the example I’m setting. I want him to grow up knowing that you can chase your dreams without sacrificing your responsibilities. That you can build a life that's both passionate and stable. I’m doing this not just for me—but to give him the kind of life I never stop believing in.
            </p>
          </div>
        </div>
      </section>


  )
}
