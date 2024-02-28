CREATE TABLE technologies (
  id SERIAL PRIMARY KEY,
  image VARCHAR(255),
  video VARCHAR(255),
  text TEXT
);

INSERT INTO technologies (image, video, text)
VALUES
('ejemplo.com/tech1_img.jpg', 'ejemplo.com/tech1_video.mp4', 'Texto de la tecnología 1'),
('ejemplo.com/tech2_img.jpg', 'ejemplo.com/tech2_video.mp4', 'Texto de la tecnología 2'),
('ejemplo.com/tech3_img.jpg', 'ejemplo.com/tech3_video.mp4', 'Texto de la tecnología 3'),
('ejemplo.com/tech4_img.jpg', 'ejemplo.com/tech4_video.mp4', 'Texto de la tecnología 4'),
('ejemplo.com/tech5_img.jpg', 'ejemplo.com/tech5_video.mp4', 'Texto de la tecnología 5'),
('ejemplo.com/tech6_img.jpg', 'ejemplo.com/tech6_video.mp4', 'Texto de la tecnología 6'),
('ejemplo.com/tech7_img.jpg', 'ejemplo.com/tech7_video.mp4', 'Texto de la tecnología 7'),
('ejemplo.com/tech8_img.jpg', 'ejemplo.com/tech8_video.mp4', 'Texto de la tecnología 8'),
('ejemplo.com/tech9_img.jpg', 'ejemplo.com/tech9_video.mp4', 'Texto de la tecnología 9'),
('ejemplo.com/tech10_img.jpg', 'ejemplo.com/tech10_video.mp4', 'Texto de la tecnología 10');
