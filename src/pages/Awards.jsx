import InfoSection from "../components/InfoSection";
import RecognitionCard from "../components/RecognitionCard"; 
import { AwardsData } from "../info/AwardsData.jsx"; 
import MediaPresence from "../components/MediaPresence.jsx";
import PublicationSection from "../components/Publications.jsx";
import { publicationData } from "../info/AwardsData.jsx";
import ChefMission from "../components/ChefMission.jsx";
import media from "../assets/gallery/media/media_01.jpeg"

const Awards = () => {
    return (
        <div className="w-full pt-12 flex flex-col gap-0">
            {/* 1. Hero Intro Section */}
            <InfoSection 
                tag="Recognition"
                title="Awards & Accolades"
                description="Chef Bimba Nayak's exceptional skills in baking, Sugarcraft, and heritage cuisines have earned her multiple prestigious awards and recognitions. Her contributions extend across luxury hospitality, competitive culinary events, and media platforms, making her a well-respected name in the industry."
                image={media}
                reverse={false} 
            />

            {/* 2. Awards Grid Section: Vertical rectangles in a horizontal row */}
            <section className="bg-[#f8f9fa] py-24 px-6 md:px-16">
                <div className="max-w-6xl mx-auto">
                    {/* The Grid: 1 column on mobile, 2 columns on desktop */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        {AwardsData.map((item, index) => (
                            <RecognitionCard 
                                key={index} 
                                {...item} 
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Media Presence: Full-width brand showcase */}
            <MediaPresence />

            {/* 4. Publication Section: Featured Print Media */}
            <PublicationSection data={publicationData} />

            {/* 5. Chef Mission: Full-width philosophical anchor */}
            <ChefMission 
                quote="Culinary excellence is not a destination, but a lifelong journey of learning, creativity, and passion." 
                label="Chef Bimba Nayak" 
            />
        </div>
    );
};

export default Awards;