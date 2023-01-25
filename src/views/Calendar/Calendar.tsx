import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import { getDate, getMonth, getYear } from "../../common/Util";
import { errorLog } from "../../common/Log";
import { getData } from "../../services/api";

const Calendar_Component = () => {
  const localizer = momentLocalizer(moment);
  const [Events, setEvents] = useState<any>([]);
  const [pageData, SetPageData] = useState({
    pageNumber: 0,
    pageSize: 200,
    total: 0,
  });

  const fetchUser = async (pageNumber: number, per_page: number) => {
    try {
      const user = await getData(pageNumber, per_page);
      if (user.status === 200) {
        SetPageData({
          ...pageData,
          pageNumber: Math.ceil(user.data.skip / pageData.pageSize),
          total: user.data.total,
        });
        setEvents(
          user.data.users.map((val: any, idx: any) => {
            return {
              birthDate: val.birthDate,
              title:`${val.firstName}'s Birthday`,
              start: new Date(
                getYear(),
                getMonth(val.birthDate),
                getDate(val.birthDate),
                1,
                0
              ),
              end: new Date(
                getYear(),
                getMonth(val.birthDate),
                getDate(val.birthDate),
                2,
                0
              ),
              id: idx,
              color: "#0000FF",
            };
          })
        );
      } else {
        throw new Error(user.errors);
      }
    } catch (error: any) {
      errorLog(error);
    } finally {
      //do nothing
    }
  };

  useEffect(() => {
    fetchUser(pageData.pageNumber, pageData.pageSize);
  }, []);

  return (
    <>
      <div className="wrapper">
        <Calendar
          localizer={localizer}
          events={Events}
          startAccessor="start"
          endAccessor="end"
          defaultDate={moment().toDate()}
          views={{
            day: true,
            week: true,
            month: true,
          }}
          eventPropGetter={(event: any) => {
            const eventData = Events.find((ot: any) => ot.id === event.id);
            const backgroundColor = eventData && eventData.color;
            return { style: { backgroundColor } };
          }}
        />
      </div>
    </>
  );
};

export default Calendar_Component;
