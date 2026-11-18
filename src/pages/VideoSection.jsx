import "./VideoSection.css";

export default function VideoSection() {
  const items = [
    {
      title: "Premium Scent",
      text: "Unique fragrance crafted with luxury oils.",
      video: "https://cdn.dotpe.in/longtail/custom_website/9225089/JI3We9C9.mp4"
    },
    {
      title: "Long Lasting",
      text: "Stay fresh all day with long-lasting perfumes.",
      video: "https://cdn.dotpe.in/longtail/custom_website/9225089/8XYTBbns.mp4"
    },
    {
      title: "Best Quality",
      text: "High-quality products for daily and special use.",
      video: "https://cdn.dotpe.in/longtail/custom_website/9225089/P4M3VF3I.mp4"
    },
    {
      title: "Best Quality",
      text: "High-quality products for daily and special use.",
      video: "https://cdn.dotpe.in/longtail/custom_website/9225089/jFjtEmxP.mp4"
    }
  ];

  return (
    <div className="container my-4">
        <h2 className="h1">Shop through videos</h2>
      <div className="row g-5">
        {items.map((item, i) => (
          <div key={i} className="col-6 col-md-4 col-lg-3">
            <div className="card video-card shadow-sm border-0">

              <video
                className="card-video"
                src={item.video}
                autoPlay
                loop
                muted
                playsInline
              />

              {/* <div className="card-body text-center p-2">
                <h6 className="card-title mb-1">{item.title}</h6>
                <p className="card-text small">{item.text}</p>
              </div> */}

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
