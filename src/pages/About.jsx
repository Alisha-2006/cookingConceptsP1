import ChefMission from "../components/ChefMission.jsx";
import InfoSection from "../components/InfoSection.jsx";
import HeritageFood from "../assets/heritageFood.jpeg";

const About = () => { 
    return (
        <div  className="w-full pt-12 ">
            <InfoSection 
            tag="Preserving Mumbai’s Coastal Culinary Heritage"
            title="Heritage Guardian."
            description="Mumbai-based culinary expert dedicated to preserving authentic coastal and Pathare Prabhu cuisine. Based in Prabhadevi, she brings decades of experience as a chef, educator, and cultural custodian, ensuring that traditional recipes and techniques continue to thrive in modern kitchens."
            image="http://googleusercontent.com/image_collection/image_retrieval/7898923137845845329_0"
            reverse={false} />
            
            <InfoSection 
            tag="Heritage"
            title="Roots in Tradition"
            description="Born into the Pathare Prabhu community, Chef Bimba grew up in a home where food was a way of preserving identity and heritage. From slow-roasted spices to traditional homemade pao bread, she learned that authentic cooking requires patience, discipline, and respect for time-honoured methods. These early experiences shaped her lifelong commitment to traditional cuisine."
            image="http://googleusercontent.com/image_collection/image_retrieval/7898923137845845329_0"
            reverse={true}/>
            
            <InfoSection 
            tag="Global Reach"
            title="Experience That Transcends Borders"
            description={
                <>
                She served as a chef to the{" "}
                <span className="text-[#ef233c] font-medium italic">
                    Royal Family of Kuwait
                </span>{" "}
                gaining international exposure and professional refinement. On returning to Mumbai, 
                she founded <span className="italic font-medium text-[#ef233c]">Cooking Concepts</span>, 
                combining traditional recipes with structured teaching. Her focus remains on authenticity, 
                helping learners understand not just how to cook, but why traditional methods matter.
                </>
            }
            image="http://googleusercontent.com/image_collection/image_retrieval/7898923137845845329_0"
            reverse={false}
            />
            
            <InfoSection 
            tag="Signature Dishes"
            title="The Pathare Prabhu Kitchen"
            description="At the heart of her work is the preservation of rare Pathare Prabhu dishes, known for their balanced flavours and refined spice usage. Her family’s hand-roasted sambhar masala remains a cornerstone of her cooking, representing generations of culinary heritage passed down with care."
            image="http://googleusercontent.com/image_collection/image_retrieval/7898923137845845329_0"
            reverse={true} />

            <InfoSection 
            tag="Legacy"
            title="Teaching, Recognition, and Legacy"
            description={
                <>
                Chef Bimba is a recipient of the{" "}
                <span className="text-[#ef233c] font-medium italic">
                    Godrej Protekt Award
                </span>{" "}
                and has been featured at food festivals and culinary platforms across Mumbai. Her workshops attract food lovers of all ages and are often supported by her family, reflecting her belief in passing traditions from one generation to the next. Her legacy is not just in the dishes she creates but in the knowledge she imparts, ensuring that Mumbai’s coastal culinary heritage continues to thrive in modern kitchens.
                </>
            }
            image={HeritageFood}
            reverse={false}
            />

            <InfoSection 
            tag="Tradition"
            title="Keeping Tradition Alive"
            description="In an age of fast food and fleeting trends, Chef Bimba Manoj Nayak continues to champion authenticity and regional pride. Through her cooking and teaching, she ensures that Mumbai’s coastal food heritage remains alive, relevant, and deeply respected. Her work is a testament to the power of food as a cultural touchstone and a bridge between generations."
            image="http://googleusercontent.com/image_collection/image_retrieval/7898923137845845329_0"
            reverse={true} />

            <ChefMission 
                quote="Preserving our culinary heritage is a labor of love; it's about keeping the soul of our community alive for future generations." 
                label="Her Mission" />
        </div>
    );
};

export default About; 