import Moment from "react-moment";

export function setDateFormat() {
  const moment = <Moment format="YYYY-MM-DD HH:mm:ss">{new Date()}</Moment>;
  const year = moment.props.children.getFullYear();
  const month = moment.props.children.getMonth() + 1;
  const day =
    moment.props.children.getDate() < 10
      ? "0" + moment.props.children.getDate()
      : moment.props.children.getDate();
  const time = moment.props.children.toLocaleTimeString();
  const date = `${year}-${month}-${day} ${time}`;
  return date;
}
