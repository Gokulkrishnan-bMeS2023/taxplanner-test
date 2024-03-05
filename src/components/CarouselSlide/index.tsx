"use client";
import React, { useState } from 'react';
import styled from 'styled-components';

interface CarouselProps {
  className?: string;
}

const Carousel: React.FC<CarouselProps> = ({ className }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const images: string[] = ['/assets/carousel-1.png', '/assets/carousel-3.png'];
  const captions: string[] = [
    'Know More',
    'Generate',
  ];
  const headings: string[] = [
    'Missed filing ITR for FY21-22? You can still file it.',
    'Generate Rental receipts for FY22-23 for free.',
  ];
  const links: string[] = [
    'itr-u-updated-income-tax-return.html',
    'https://services.taxplanner.co.in/auth/itr-filing/rental-receipt/generate-receipt.aspx',
  ];

  const handlePrev = () => {
    setActiveIndex((prevIndex: number) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex: number) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <Container className={className}>
      <CarouselContainer>
        {images.map((src, index) => (
          <Slide key={index} isActive={index === activeIndex}>
            <Image src={src} alt="Carousel Image" />
            <Caption>
              <CaptionText>Tax Planning made simple</CaptionText>
              <Heading as={"h1"}>{headings[index]}</Heading>
              <Button href={links[index]}>{captions[index]}</Button>
            </Caption>
          </Slide>
        ))}
        <PrevButton onClick={handlePrev} ><Image src="./assets/Symbol2.svg" alt=" " /></PrevButton>
        <NextButton onClick={handleNext}><Image src="./assets/Symbol1.svg" alt=" " /></NextButton>
      </CarouselContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;

const CarouselContainer = styled.div`
  position: relative;
  width:100%;
`;

const Slide = styled.div<{ isActive: boolean }>`
  display: ${(props) => (props.isActive ? 'block' : 'none')};
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  display:inline-block;
`;

const Caption = styled.div`
  position: absolute;
  top: 48%;
  width: 50%;
  transform: translate(16%, -50%);
  text-align: left;
  
  @media (max-width: 768px) {
    top:50%;
    width:45%;
    transform: translate(20%, -50%);
  }
  @media (min-width: 768px) and (max-width: 991px) {
    top:50%;
    width:45%;
    transform: translate(20%, -50%);
  }
`;

const CaptionText = styled.p`
  display: inline-block;
  border-radius: 8px;
  background-color: #B4d234;
  color: #fff;
  padding: 0.25rem 1rem;
  margin-bottom: 1rem;   
`;

const Heading = styled.h3`
  font-size: 64px;
  margin-bottom: 2rem;
  color: #01ACF1;
  font-weight:600;
  line-height: 1.2;
  text-align: left; 
  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 1rem;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    font-size: 24px;
  }
  @media (min-width: 991px) and (max-width: 1200px) {
    font-size: 44px;
  }
`;

const Button = styled.a`
  display: inline-block;
  border-radius: 0.25rem;
  padding: 16px 48px;
  background-color: #2D50D6;
  color: #dfe4fd;
  text-decoration: none;
  font-weight: 600!important;
  letter-spacing: 0.03rem;
  font-family:"Open Sans",sans-serif;
  border-radius:8px;
  transition: background-color 0.3s ease;
`;

const PrevButton = styled.button`
  position: absolute;
  top: 50%;
  left: 0;
  background-color: #01acf1;
  border-radius: 0 3rem 3rem 0;
  width:2rem;
  height:3rem;
  transform: translateY(-50%);
  border: 8px solid #01ACF1;
  color:white;
  cursor: pointer;
  font-size: 1.4rem;
`;

const NextButton = styled.button`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  background-color: #01acf1;
  border-radius: 3rem 0 0 3rem;
  width:2rem;
  height:3rem;
  border: 8px solid #01ACF1;
  cursor: pointer;
  color:white;
  font-size: 1.4rem;
`;

export default Carousel;
