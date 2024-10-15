import { ITestimonial } from "../../types/testimonial";

export function Testimonial({
  author,
  image,
  area,
  testimonial,
}: ITestimonial) {
  return (
    <div className="testimonials-item">
      <p>{author}</p>
      <div className="testimonials-author">
        <div className="image">
          <img src={image} />
        </div>
        <div className="bio">
          <h3>{area}</h3>
          <p>{testimonial}</p>
        </div>
      </div>
    </div>
  );
}
