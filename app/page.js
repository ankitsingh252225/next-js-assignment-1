import HomeComponent from "./component/HomeComponent";
import FeatureComponent from "./component/FeatureComponent";
const Home=()=>{
  return(
    <div className="flex flex-col">
      <HomeComponent />
      <FeatureComponent/>
    </div>
  )
}
export default Home;  