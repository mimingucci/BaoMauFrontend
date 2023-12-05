import icons from "../../utils/icons";
const { FaArrowRightLong, FaStar, GoDotFill } = icons;
const NavbarPart3 = () => {
  return (
    <div className="w-full border-[2px] rounded-t-md border-solid border-black mt-4">
      <div className="flex items-center text-blue-800">
        <FaArrowRightLong size={20} className="mx-[5px] " />
        Top contributors
      </div>
      <hr />
      <div>
        <table class="table-fixed w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>User</th>
              <th>Contribution</th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-gray-200">
              <td>1</td>
              <td>mimingucci</td>
              <td>150</td>
            </tr>
            <tr className="odd:bg-gray-200">
              <td>2</td>
              <td>tourist</td>
              <td>137</td>
            </tr>
            <tr className="odd:bg-gray-200">
              <td>3</td>
              <td>jiangly</td>
              <td>120</td>
            </tr>
            <tr className="odd:bg-gray-200">
              <td>4</td>
              <td>Radewoosh</td>
              <td>50</td>
            </tr>
            <tr className="odd:bg-gray-200">
              <td>5</td>
              <td>fantasy</td>
              <td>10</td>
            </tr>
            <tr className="odd:bg-gray-200">
              <td>6</td>
              <td>xxx</td>
              <td>9</td>
            </tr>
          </tbody>
        </table>
        <div className="flex items-center bg-gray-200 text-blue-800 flex-row-reverse">
           <FaArrowRightLong size={15} className="mx-[5px]"/> 
           View all
        </div>
      </div>
    </div>
  );
};
export default NavbarPart3;
