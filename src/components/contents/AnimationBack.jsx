import ImgBack from "../../img/img-back.png";

export default function AnimationBack() {
  return (
    <img
      className="max-img animate-rotate absolute top-0 left-1/2 h-auto w-530 lg:w-700"
      src={ImgBack}
      alt="Shape"
    />
  )
}