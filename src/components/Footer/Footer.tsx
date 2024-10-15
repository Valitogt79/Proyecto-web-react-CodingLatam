import { Button } from "../Button/Button";

export function Foorter() {
  return (
    <footer>
      <div className="container footer-container">
        <h2>
          Join our community by using our services and grow your business.
        </h2>
        <Button content="Try It For Free" href="/try" />
      </div>
    </footer>
  );
}
