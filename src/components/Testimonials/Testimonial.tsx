import { ITestimonial } from "../../types/testimonial";

export function Testimonial({
  author,
  image,
  area,
  testimonial,
}: ITestimonial) {
  return (
    <div className="bg-white p-5">
      <p className="text-[18px]">{author}</p>
      <div className="flex justify-start gap-7 mb-7">
        <div className="image">
          <img className="max-w-[70px]" src={image} />
        </div>
        <div className="bio">
          <h3>{area}</h3>
          <p>{testimonial}</p>
        </div>
      </div>
    </div>
  );
}
