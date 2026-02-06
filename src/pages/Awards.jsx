import InfoSection from "../components/InfoSection";
import RecognitionCard from "../components/RecognitionCard"; 
import { AwardsData } from "../info/AwardsData.jsx"; 
import MediaPresence from "../components/MediaPresence.jsx";
import PublicationSection from "../components/Publications.jsx";
import { publicationData } from "../info/AwardsData.jsx";
import ChefMission from "../components/ChefMission.jsx";

const Awards = () => {
    return (
        <div className="w-full pt-12">
            {/* Top Intro Section */}
            <InfoSection 
                tag="Recognition"
                title="Awards & Accolades"
                description="Chef Bimba Nayak's exceptional skills in baking, Sugarcraft, and heritage cuisines have earned her multiple prestigious awards and recognitions. Her contributions extend across luxury hospitality, competitive culinary events, and media platforms, making her a well-respected name in the industry."
                image="http://googleusercontent.com/image_collection/image_retrieval/7898923137845845329_0"
                reverse={false} 
            />

            {/* Awards Grid Section */}
            <div className="bg-[#f8f9fa] py-20 px-6 md:px-16">
                <div className="max-w-6xl mx-auto">
                    {/* The Grid: 1 column on mobile, 2 columns on desktop */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {AwardsData.map((item, index) => (
                            <RecognitionCard 
                                key={index} 
                                {...item} 
                            />
                        ))}
                    </div>
                </div>
            </div>
            <MediaPresence />
            <PublicationSection data={publicationData} />
            <ChefMission 
                quote="Culinary excellence is not destination, but a lifelong journey of learning, creativity, and passion." 
                label="Chef Bimba Nayak" 
            />
        </div>
    );
};

export default Awards;