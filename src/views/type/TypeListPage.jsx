import { useParams } from "react-router-dom";
import { Title, TypeList } from "../../components/common";
import { food_bg_two } from "../../utils/images";
import { cuisinesData, dishTypeData, mealTypeData } from "../../data";

const TypeListPage = () => {
  const { typeId } = useParams();
  let typeList = null;

  if (typeId === "meal") {
    typeList = mealTypeData;
  } else if (typeId === "dish") {
    typeList = dishTypeData;
  } else {
    typeList = cuisinesData;
  }

  const mainTitle = typeId === "dish" ? "dishe" : `${typeId}`;
  return (
    <main
      className="type-list-page custom-min-h pt-[4px]"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${food_bg_two}') center/cover no-repeat fixed`,
      }}
    >
      <div className="container">
        <Title subTitle="Get Meal Ready" mainTitle={`Recipe ${mainTitle}s`} />
        <TypeList typeId={typeId} typeList={typeList} />
      </div>
    </main>
  );
};

export default TypeListPage;
