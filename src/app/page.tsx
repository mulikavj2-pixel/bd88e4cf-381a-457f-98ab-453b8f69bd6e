"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroLogoBillboard from '@/components/sections/hero/HeroLogoBillboard';
import AboutMetric from '@/components/sections/about/AboutMetric';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import { Coffee, Globe, Users, Leaf } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
      contentWidth="large"
      sizing="mediumSizeExtraLargeSpacing"
      background="none"
      cardStyle="floating"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="minimal"
      headingFontWeight="bold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="BrewHaven"
          navItems={[
            { name: "About", id: "about" },
            { name: "Products", id: "products" },
            { name: "Testimonials", id: "testimonials" },
            { name: "FAQ", id: "faq" },
            { name: "Contact", id: "contact" }
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogoBillboard
          logoText="BrewHaven"
          description="Discover the finest specialty coffee crafted with passion. From ethically sourced beans to perfectly pulled espresso, we bring the coffee shop experience to you."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765376024034-hl813z93.jpg"
          imageAlt="Premium coffee shop with espresso machine"
          frameStyle="card"
        />
      </div>

      <div id="about" data-section="about">
        <AboutMetric
          title="BrewHaven stands as a beacon for coffee enthusiasts who demand quality, sustainability, and authentic craftsmanship in every cup"
          metrics={[
            { icon: Coffee, label: "Years Brewing", value: "15+" },
            { icon: Globe, label: "Coffee Origins", value: "12" },
            { icon: Users, label: "Happy Customers", value: "5,000+" },
            { icon: Leaf, label: "Sustainable Practices", value: "100%" }
          ]}
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardOne
          title="Featured Coffee Selection"
          description="Explore our carefully curated collection of premium coffee blends and single-origin beans"
          products={[
            {
              id: "1",
              name: "Ethiopian Highlands",
              price: "$18",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765376025718-xj3nucs2.jpg",
              imageAlt: "Ethiopian Highlands coffee beans"
            },
            {
              id: "2",
              name: "Cold Brew Reserve",
              price: "$16",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765376026966-fbnlyy13.jpg",
              imageAlt: "Cold brew iced coffee"
            },
            {
              id: "3",
              name: "Signature Espresso",
              price: "$14",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765376028253-jjelztfu.jpg",
              imageAlt: "Latte with latte art"
            },
            {
              id: "4",
              name: "Dark Roast Bold",
              price: "$17",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765376029308-h2in6kwc.jpg",
              imageAlt: "Dark roast espresso shot"
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="uniform-all-items-equal"
          containerStyle="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThirteen
          title="What Coffee Lovers Say"
          description="Hear from our community of dedicated coffee enthusiasts"
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              handle: "@sarahmitchell",
              testimonial: "BrewHaven has completely transformed my morning routine. The quality is unmatched and the customer service is exceptional. I am a loyal customer for life.",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765376030476-ycj22qs6.jpg",
              imageAlt: "Sarah Mitchell"
            },
            {
              id: "2",
              name: "James Chen",
              handle: "@jameschen",
              testimonial: "Finally found a coffee shop that understands the art of espresso. Every shot is perfectly pulled and the beans are always fresh. Highly recommend!",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765376031719-b1w3ynvn.jpg",
              imageAlt: "James Chen"
            },
            {
              id: "3",
              name: "Emma Rodriguez",
              handle: "@emmarod",
              testimonial: "The atmosphere and quality at BrewHaven is unbeatable. I visit multiple times a week and always leave satisfied. Best local coffee spot in town.",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765376033125-nkwbvqb5.jpg",
              imageAlt: "Emma Rodriguez"
            },
            {
              id: "4",
              name: "Michael Park",
              handle: "@michaelpark",
              testimonial: "Sustainable sourcing combined with exceptional quality makes this my go-to place. The baristas really care about what they do.",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765376038870-18vy6u0d.jpg",
              imageAlt: "Michael Park"
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
          containerStyle="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Find answers to common questions about our coffee, ordering, and services"
          faqs={[
            {
              id: "1",
              title: "Where do you source your coffee beans?",
              content: "We source our coffee beans directly from sustainable farms across Ethiopia, Colombia, and Indonesia. Each origin is carefully selected for its unique flavor profile and ethical farming practices."
            },
            {
              id: "2",
              title: "Do you offer subscriptions?",
              content: "Yes! We offer monthly subscription plans where you can receive freshly roasted beans delivered to your door. Choose from our various roast levels and origins, with flexible pause and cancellation options."
            },
            {
              id: "3",
              title: "What brewing methods do you recommend?",
              content: "We recommend different brewing methods depending on the bean origin. For light roasts, try pour-over or Aeropress. For dark roasts, espresso or French press work beautifully. Our baristas are happy to provide personalized recommendations."
            },
            {
              id: "4",
              title: "Are your cups environmentally friendly?",
              content: "Absolutely. We use compostable and recyclable cups made from plant-based materials. We also offer a 10% discount for customers who bring their own reusable cups."
            },
            {
              id: "5",
              title: "How long do roasted beans stay fresh?",
              content: "Our beans are best enjoyed within 2-3 weeks of roasting. We always print the roast date on our packaging so you know exactly when your coffee was roasted for optimal flavor."
            },
            {
              id: "6",
              title: "Do you have decaf options?",
              content: "Yes, we offer decaf versions of all our blends and single-origin beans. Our decaf is water-processed to maintain the full flavor profile without the caffeine."
            }
          ]}
          textboxLayout="default"
          useInvertedBackground="noInvert"
          animationType="smooth"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Get in Touch"
          description="Have questions about our coffee or want to book a tasting event? Reach out to us and we will get back to you within 24 hours."
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Your Email",
              required: true
            },
            {
              name: "subject",
              type: "text",
              placeholder: "Subject",
              required: true
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us your message...",
            rows: 5,
            required: true
          }}
          useInvertedBackground="noInvert"
          buttonText="Send Message"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoReveal
          logoText="BrewHaven"
        />
      </div>
    </ThemeProvider>
  );
}