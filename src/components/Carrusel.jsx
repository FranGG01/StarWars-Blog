import { Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from "reactstrap"
import "./Styles/Carrusel.css";
export const Carrusel = () => {
  return (
    <>
    <div className="carrusel-scroll-container">
      <div className="carrusel-cards">
        <Card className="carrusel-card">
          <CardImg src="https://picsum.photos/318/180?1" alt="Image 1" top />
          <CardBody>
            <CardTitle tag="h5">Card 1</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">Subtitle 1</CardSubtitle>
            <CardText>Text content for the first card.</CardText>
            <Button>Button 1</Button>
          </CardBody>
        </Card>

        <Card className="carrusel-card">
          <CardImg src="https://picsum.photos/318/180?2" alt="Image 2" top />
          <CardBody>
            <CardTitle tag="h5">Card 2</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">Subtitle 2</CardSubtitle>
            <CardText>Text content for the second card.</CardText>
            <Button>Button 2</Button>
          </CardBody>
        </Card>

        <Card className="carrusel-card">
          <CardImg src="https://picsum.photos/318/180?3" alt="Image 3" top />
          <CardBody>
            <CardTitle tag="h5">Card 3</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">Subtitle 3</CardSubtitle>
            <CardText>Text content for the third card.</CardText>
            <Button>Button 3</Button>
          </CardBody>
        </Card>

        <Card className="carrusel-card">
          <CardImg src="https://picsum.photos/318/180?4" alt="Image 4" top />
          <CardBody>
            <CardTitle tag="h5">Card 4</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">Subtitle 4</CardSubtitle>
            <CardText>Text content for the fourth card.</CardText>
            <Button>Button 4</Button>
          </CardBody>
        </Card>

        <Card className="carrusel-card">
          <CardImg src="https://picsum.photos/318/180?5" alt="Image 5" top />
          <CardBody>
            <CardTitle tag="h5">Card 5</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">Subtitle 5</CardSubtitle>
            <CardText>Text content for the fifth card.</CardText>
            <Button>Button 5</Button>
          </CardBody>
        </Card>

        <Card className="carrusel-card">
          <CardImg src="https://picsum.photos/318/180?6" alt="Image 6" top />
          <CardBody>
            <CardTitle tag="h5">Card 6</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">Subtitle 6</CardSubtitle>
            <CardText>Text content for the sixth card.</CardText>
            <Button>Button 6</Button>
          </CardBody>
        </Card>

        <Card className="carrusel-card">
          <CardImg src="https://picsum.photos/318/180?7" alt="Image 7" top />
          <CardBody>
            <CardTitle tag="h5">Card 7</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">Subtitle 7</CardSubtitle>
            <CardText>Text content for the seventh card.</CardText>
            <Button>Button 7</Button>
          </CardBody>
        </Card>

        <Card className="carrusel-card">
          <CardImg src="https://picsum.photos/318/180?8" alt="Image 8" top />
          <CardBody>
            <CardTitle tag="h5">Card 8</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">Subtitle 8</CardSubtitle>
            <CardText>Text content for the eighth card.</CardText>
            <Button>Button 8</Button>
          </CardBody>
        </Card>

         <Card className="carrusel-card">
          <CardImg src="https://picsum.photos/318/180?9" alt="Image 8" top />
          <CardBody>
            <CardTitle tag="h5">Card 9</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">Subtitle 8</CardSubtitle>
            <CardText>Text content for the eighth card.</CardText>
            <Button>Button 9</Button>
          </CardBody>
        </Card>
      </div>
    </div>
    </>
  );
};