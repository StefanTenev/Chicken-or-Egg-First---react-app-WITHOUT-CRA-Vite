import Section from "./Section"
function MainContent(){

    //SECTIONS CONSTRUCTOR:
    // The constructor is designed to take an array of arguments, however, the idea is that the first 2 items in the array
    // will be the title (1st) and the section number (2nd), the rest will be the paragraphs, it is crucial that the array is given
    // with items in the correct order (for the 1st two items)
    
    class CreateSection{
      constructor(...args){
        //create a title prop
        this.title = args[0][0]
        //create a section number prop
        this.sectionNum = args[0][1]
        //create a paragraphs object prop, into which, paragraps will be declared - these will be the rest of the arguments
        this.paragraphs = {}
        
        for(let i = 2; i < args[0].length; i++){
          this.paragraphs[`par${i-1}`] = args[0][i]
        }
        
      }
    }
    
    // SECTION 1:
    
      let section1 = new CreateSection([
        "Basics of Evolution",
        1,
        "Evolution, and a change of a specie, occur, when random mutations within the genetic code occur within an organism.",
        "Mutations, are created through damage or faulty reproduction of the genetic code, this means that the genetic code will be changed.",
        "The genetic code is responsible for the production of proteins within an organism, where proteins would be the base structures of the organism, for example, hairs are made of protein chains, and so is skin.",
        "Therefore, as genetic mutations occur, the code will dictate for a different protein, and so different structures to be build.",
        "As mutations build up, more and more structures are different, compared to x amount of time before. For a given specie, at a certain point, if the specie with the built up mutation mates with its theoretical former specie without the build up of mutations, the two organisms will not be able to produce fertile offspring, or not able to mate at all.",
        "Though the above example shows the theory of speciation, realistically, one specie would be separated (e.g. a river forming between them), and the two groups will eventually speciate into two different, organisms."
        
    
      ])
      let section2 = new CreateSection([
        "Maybe the Chicken Came First",
        2,
        "Though mutations can occur during an organisms lifetime, most that lead to speciation are in the very beginning stages of an organism's life.",
        "As mentioned before, most of an organisms physiology, would be controlled by genes, and its potential interaction with the environment. This therefore means, that a chicken, will have the characteristics to create and lay eggs of particular properties (i.e. size, shell thickess, etc.)",
        "Eventually, a chick will be born, where the mutations will occur at its early life stages (as early as being in the egg), though the egg would be of the specie not yet recognized as the current chicken, the chick inside will be the current chicken, as it builds the last mutations of this specie.",
        'This means that the egg itself will still be the same egg as the egg of the "previous" chicken specie, but the bird inside it, will attain the mutations to be the "current" chicken specie - and so - the chicken came first!',
        'Lastly, it is important to note, that although we spoke of speciation earlier, and that it is when organisms are so different that they can\'t mate/can\'t produce fertile offspring; this biological measure is often done of species which have developer throught a (Depending on the organism!) a large time frame (though time frame would give us understandable prespective for change of larger organisms, what really matters, is the amount/type of accumulated mutations, i.e. microorganisms replicate much faster and can accumulate many more mutations much faster), as such it really measures the difference of organisms after a large sum of mutations, it is not like the "new" chicken won\'t be able to mate with the chickens like its parents - even though this chicken will be the "new" and "current". Hence, now what matters, is at exact mutation, can we say that we have gotten the "current" chickens.'
      ])
      let section3 = new CreateSection([
        "Maybe the Egg Came First",
        3,
        "If we follow the logic above, we can see how a similar scenario can occur for the egg.",
        'Maybe, the "previous" chickens mutated in a way, which allowed them to lay the eggs that the "current" chickens lay in, at the end of the day - the purpose of the eggs is to provide a developmental environment for the organism.',
        'The chickens inside this eggs, could have still been the "previous" chickens, but in the "new" egg, untill the chickens inside it evolve to the point at which they are now.' ,
        'And it is at this point at which we would need to think more about the details of the question and does it matter that we get just the same physical egg and chicken, or we need to have an egg, in which lay the "current" chickens (which I personally believe is not necessary).',
        'Finally - the next fact is that mutations are thousands and possibly millions of tiny changes that build up over time. For that reason, just as mentioned before, we would need to ask ourselves at which exact time could we classify the "current" chicken and the "previous" chicken.'
      ])
    
      
    
      
    
    
      return (
        <main className="mainContent"> 
        {/* Title and intro */}
          <h1>How Did The Chicken Come Before The Egg?</h1>
          <h3 >(Assuming, that we say "the chicken" and "the egg", we are speaking about the hens/roosters that are exist currently and their eggs, not just any egg)</h3>
          
          {/* 1st list section */}
          <Section sectionTitle={section1.title} 
                   sectionNumber={section1.sectionNum}
                   par1={section1.paragraphs.par1} 
                   par2={section1.paragraphs.par2}
                   par3={section1.paragraphs.par3}
                   par4={section1.paragraphs.par4}
                   par5={section1.paragraphs.par5}
                   par6={section1.paragraphs.par6}
                   />
          
          {/* 2nd list section */}
          <Section sectionTitle={section2.title} 
                   sectionNumber={section2.sectionNum}
                   par1={section2.paragraphs.par1} 
                   par2={section2.paragraphs.par2}
                   par3={section2.paragraphs.par3}
                   par4={section2.paragraphs.par4}
                   par5={section2.paragraphs.par5}
                   />
          
          
          {/* 3rd list section */}
          <Section sectionTitle={section3.title} 
                   sectionNumber={section3.sectionNum}
                   par1={section3.paragraphs.par1} 
                   par2={section3.paragraphs.par2}
                   par3={section3.paragraphs.par3}
                   par4={section3.paragraphs.par4}
                   par5={section3.paragraphs.par5}
                   />
          
          <hr></hr>
          <br />
          <br />
          <br />
          <p>With all that said, have asked yourself... what the fuck does it matter which came first? It existed as it did and now it exists as it does.</p>
        </main>
        
      )
    }

export default MainContent