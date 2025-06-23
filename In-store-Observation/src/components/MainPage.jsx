import { useState } from "react";
import vivoLogo from "../assets/images/vivo_logo.png";
import cctv from "../assets/images/CCTV.gif";
import thumbnails from "../assets/images/video-prevLogo.png";
import { FaPowerOff, FaCalendarAlt } from "react-icons/fa";
import Select from "react-select";
import Calendar from "react-calendar";
import DatePicker from "react-datepicker";
import "react-calendar/dist/Calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import "./Calendar.css";

const options = [
  { value: "Store_1", label: "Store 1" },
  { value: "Store_2", label: "Store 2" },
  { value: "Store_3", label: "Store 3" },
];

export default function MainPage() {
  const [date, setDate] = useState(new Date());
  const [selectedOption, setSelectedOption] = useState(null);
  const [showMobileCalendar, setShowMobileCalendar] = useState(false);
  const customStyles = {
    control: (base, state) => ({
      ...base,
      backgroundColor: "#fff",
      borderColor: "#2C28A0",
      fontSize: "16px",
      padding: "2px",
      borderRadius: "4px",
      cursor: "pointer",
      minHeight: "40px",
      minWidth: "160px",
      boxShadow: state.isFocused ? "0 0 0 1px var(--select-focus)" : null,
      "&:hover": {
        borderColor: "#2C28A0",
      },
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isSelected ? "#2C28A0" : "#fff",
      color: state.isSelected ? "#fff" : "#000",
      "&:hover": {
        backgroundColor: "#605bda",
        color: "#fff",
      },
    }),
    singleValue: (base) => ({
      ...base,
      color: "var(--select-text)",
    }),
    menu: (base) => ({
      ...base,
      backgroundColor: "var(--menu-bg)",
    }),
    placeholder: (base) => ({
      ...base,
      color: "var(--placeholder-text)",
    }),
    clearIndicator: (base) => ({
      ...base,
      color: "var(--indicator-color)",
    }),
    dropdownIndicator: (base) => ({
      ...base,
      color: "var(--indicator-color)",
    }),
  };
  return (
    <div className="w-screen h-screen sm:bg-[url('/MainPageBg.png')] bg-[url('/MainPageBgM.png')] bg-cover ">
      <header className="sm:h-[20%] h-[10%] w-full flex justify-center items-start">
        <div className="sm:h-[50%] h-[60%] flex justify-between items-center w-full">
          <div className="sm:w-[10%] w-[15%] ml-6">
            <img src={vivoLogo} alt="Vivo Logo" />
          </div>
          <div className="flex items-center">
            <img src={cctv} alt="CCTV logo" className="w-10" />
            <div className="font-semibold sm:text-2xl text-md text-white">
              In-store Observation
            </div>
          </div>
          <div className="sm:w-[10%] w-[15%] mr-6 flex justify-end">
            <FaPowerOff
              style={{ fontSize: "24px", color: "#fff", cursor: "pointer" }}
            />
          </div>
        </div>
      </header>
      <section className="sm:h-[80%] h-[90%] w-full flex sm:flex-row flex-col sm:gap-0 gap-6">
        <div className="sm:w-[15%] w-full sm:ml-4 flex sm:flex-col flex-row justify-center gap-6">
          <div>
            <label className="text-[#2C28A0]">
              <span className="text-[#2C28A0] font-bold">Store</span>
            </label>
            <Select
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={options}
              isClearable
              styles={customStyles}
              className="mt-2 flex-1"
              classNamePrefix="select"
              placeholder="--Please Select--"
            />
          </div>
          <div>
            <label className="text-[#2C28A0]">
              <span className="text-[#2C28A0] font-bold">Date</span>
            </label>
            <button
              onClick={() => setShowMobileCalendar(!showMobileCalendar)}
              className="sm:hidden block mt-2 p-2 bg-[#2C28A0] text-white rounded-md"
            >
              <FaCalendarAlt />
            </button>
          </div>
          {showMobileCalendar && (
            <div className="sm:hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
              <div className="bg-white p-4 rounded-lg w-[90%] max-w-md">
                <div className="w-fit m-auto">
                  <DatePicker
                    selected={date}
                    onChange={(date) => {
                      setDate(date);
                      setShowMobileCalendar(false);
                    }}
                    inline
                    showYearDropdown
                    scrollableYearDropdown
                    yearDropdownItemNumber={15}
                    calendarClassName="react-datepicker-custom"
                    renderCustomHeader={({
                      date,
                      changeYear,
                      changeMonth,
                      decreaseMonth,
                      increaseMonth,
                      prevMonthButtonDisabled,
                      nextMonthButtonDisabled,
                    }) => (
                      <div className="flex justify-between items-center px-4 py-2">
                        <button
                          onClick={decreaseMonth}
                          disabled={prevMonthButtonDisabled}
                          className="p-1 rounded hover:bg-gray-100"
                        >
                          {"<"}
                        </button>
                        <select
                          value={date.getFullYear()}
                          onChange={({ target: { value } }) =>
                            changeYear(Number(value))
                          }
                          className="mx-2 p-1 rounded border bg-[#2C28A0]"
                        >
                          {Array.from(
                            { length: 20 },
                            (_, i) => new Date().getFullYear() - 10 + i
                          ).map((year) => (
                            <option key={year} value={year}>
                              {year}
                            </option>
                          ))}
                        </select>
                        <select
                          value={date.toLocaleString("default", {
                            month: "long",
                          })}
                          onChange={({ target: { value } }) =>
                            changeMonth(
                              new Date(
                                Date.parse(value + " 1, 2000")
                              ).getMonth()
                            )
                          }
                          className="mx-2 p-1 rounded border bg-[#2C28A0]"
                        >
                          {Array.from({ length: 12 }, (_, i) =>
                            new Date(0, i).toLocaleString("default", {
                              month: "long",
                            })
                          ).map((month) => (
                            <option key={month} value={month}>
                              {month}
                            </option>
                          ))}
                        </select>
                        <button
                          onClick={increaseMonth}
                          disabled={nextMonthButtonDisabled}
                          className="p-1 rounded hover:bg-gray-100"
                        >
                          {">"}
                        </button>
                      </div>
                    )}
                  />
                </div>
                <button
                  onClick={() => setShowMobileCalendar(false)}
                  className="mt-4 w-full py-2 bg-[#2C28A0] text-white rounded-md"
                >
                  Close
                </button>
              </div>
            </div>
          )}
          <div className="sm:block hidden">
            <Calendar
              onChange={setDate}
              value={date}
              onClickDay={(date) => {
                console.log("Selected date:", {
                  day: date.getDate(),
                  month: date.getMonth() + 1,
                  year: date.getFullYear(),
                });
              }}
              className="border rounded-lg shadow-md"
              tileClassName={({ activeStartDate, date, view }) =>
                view === "month" && date.getDay() === 0 ? "font-bold" : null
              }
            />
          </div>
        </div>
        <div className="sm:w-[85%] w-full grid overflow-auto sm:grid-cols-8 grid-cols-2 gap-4 sm:p-6 p-3">
          <VidFrame vidTxt="Video1.MP4" />
          <VidFrame vidTxt="Video2.MP4" />
          <VidFrame vidTxt="Video3.MP4" />
          <VidFrame vidTxt="Video4.MP4" />
          <VidFrame vidTxt="Video5.MP4" />
          <VidFrame vidTxt="Video6.MP4" />
          <VidFrame vidTxt="Video7.MP4" />
          <VidFrame vidTxt="Video8.MP4" />
          <VidFrame vidTxt="Video1.MP4" />
          <VidFrame vidTxt="Video2.MP4" />
          <VidFrame vidTxt="Video3.MP4" />
          <VidFrame vidTxt="Video4.MP4" />
          <VidFrame vidTxt="Video5.MP4" />
          <VidFrame vidTxt="Video6.MP4" />
          <VidFrame vidTxt="Video7.MP4" />
          <VidFrame vidTxt="Video8.MP4" />
          <VidFrame vidTxt="Video1.MP4" />
          <VidFrame vidTxt="Video2.MP4" />
          <VidFrame vidTxt="Video3.MP4" />
          <VidFrame vidTxt="Video4.MP4" />
          <VidFrame vidTxt="Video5.MP4" />
          <VidFrame vidTxt="Video6.MP4" />
          <VidFrame vidTxt="Video7.MP4" />
          <VidFrame vidTxt="Video8.MP4" />
          <VidFrame vidTxt="Video1.MP4" />
          <VidFrame vidTxt="Video2.MP4" />
          <VidFrame vidTxt="Video3.MP4" />
          <VidFrame vidTxt="Video4.MP4" />
          <VidFrame vidTxt="Video5.MP4" />
          <VidFrame vidTxt="Video6.MP4" />
          <VidFrame vidTxt="Video7.MP4" />
          <VidFrame vidTxt="Video8.MP4" />
          <VidFrame vidTxt="Video1.MP4" />
          <VidFrame vidTxt="Video2.MP4" />
          <VidFrame vidTxt="Video3.MP4" />
          <VidFrame vidTxt="Video4.MP4" />
          <VidFrame vidTxt="Video5.MP4" />
          <VidFrame vidTxt="Video6.MP4" />
          <VidFrame vidTxt="Video7.MP4" />
          <VidFrame vidTxt="Video8.MP4" />
        </div>
      </section>
    </div>
  );
}

function VidFrame({ vidTxt }) {
  return (
    <>
      <div className="bg-white rounded-xl w-full p-2 h-fit">
        <img
          src={thumbnails}
          alt="Video Thumbnail"
          className="m-2 cursor-pointer w-[90%]"
        />
        <p className="mx-2">{vidTxt}</p>
      </div>
    </>
  );
}
