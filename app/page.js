import IntroBanner from "./component/IntroBanner";
import FeatureComponent from "./component/Feature";
import OurCollection from "./component/OurCollection";
import OurStory from "./component/OurStory";
import FaqHub from "./component/FaqHub";
import GetInTouch from "./component/GetInTouch";
import SiteFooter from "./component/SiteFooter";
const Home=()=>{
  return(
    <div className="flex flex-col">
      <IntroBanner />
      <FeatureComponent/>
      <OurCollection/>
      <OurStory/>
      <FaqHub/>
      <GetInTouch/>
      <SiteFooter/>
    </div>
  )
}
export default Home;  