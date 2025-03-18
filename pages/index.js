import Course from "@/components/templates/index/Course";
import courseModel from "@/models/course"
import connectToDB from "@/utils/db";
const index = () => {
  return <Course />;
};

export default index;

export async function getStaticProps(context) {
  connectToDB();
const course=await courseModel.find({});
console.log(course)
  return{
    props:{

    }
  }
  
}
