import styles from "../../styles/Feature.module.css";
import { Image, Button, Title, ActionIcon } from "@mantine/core";
import Slider from "react-slick";
import Product from "../catalog/product";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Feature({ feature }) {
  const [slider, setSlider] = useState(null);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    swipe: false,
    dots: true,
    infinite: true,
    dotsClass: styles.sliderBottom,
    appendDots: (dots) => {
      return (
        <div>
          <ActionIcon
            color="dark"
            size="lg"
            variant="transparent"
            onClick={slider && slider.slickPrev}
          >
            <FaChevronLeft />
          </ActionIcon>
          <div className={styles.dots}>{dots}</div>
          <ActionIcon
            color="dark"
            size="lg"
            variant="transparent"
            onClick={slider && slider.slickNext}
          >
            <FaChevronRight />
          </ActionIcon>
        </div>
      );
    },
    customPaging: (i) => (
      <button
        className={styles.dot}
        onClick={slider && slider.slickGoTo(i)}
      ></button>
    ),
    arrows: false,
    className: styles.slider,
  };

  return (
    <div className={styles.container}>
      <div className={styles.feature}>
        <div>
          <Image src={feature.image} width={"101vw"} height={500} />
        </div>
        <div className={styles.action}>
          <h3 style={{ color: feature.color }}>{feature.title}</h3>
          <Button
            component={"a"}
            href={feature.link}
            variant="filled"
            color="dark"
            className={styles.button}
            size="lg"
            radius={0}
          >
            {feature.button}
          </Button>
        </div>
      </div>
      <div className={styles.bottom}>
        <Slider {...settings} ref={(c) => setSlider(c)}>
          {feature.products.Products.map((product) => (
            <Product key={product.Product.id} product={product.Product} />
          ))}
        </Slider>
      </div>
    </div>
  );
}
