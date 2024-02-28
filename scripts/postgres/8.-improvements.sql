CREATE TABLE improvements (
  id SERIAL PRIMARY KEY,
  image VARCHAR(255),
  video VARCHAR(255),
  text TEXT
);

INSERT INTO improvements (image, video, text)
VALUES
('ejemplo.com/improvement1_img.jpg', 'ejemplo.com/improvement1_video.mp4', 'Texto de la mejora 1'),
('ejemplo.com/improvement2_img.jpg', 'ejemplo.com/improvement2_video.mp4', 'Texto de la mejora 2'),
('ejemplo.com/improvement3_img.jpg', 'ejemplo.com/improvement3_video.mp4', 'Texto de la mejora 3'),
('ejemplo.com/improvement4_img.jpg', 'ejemplo.com/improvement4_video.mp4', 'Texto de la mejora 4'),
('ejemplo.com/improvement5_img.jpg', 'ejemplo.com/improvement5_video.mp4', 'Texto de la mejora 5'),
('ejemplo.com/improvement6_img.jpg', 'ejemplo.com/improvement6_video.mp4', 'Texto de la mejora 6'),
('ejemplo.com/improvement7_img.jpg', 'ejemplo.com/improvement7_video.mp4', 'Texto de la mejora 7'),
('ejemplo.com/improvement8_img.jpg', 'ejemplo.com/improvement8_video.mp4', 'Texto de la mejora 8'),
('ejemplo.com/improvement9_img.jpg', 'ejemplo.com/improvement9_video.mp4', 'Texto de la mejora 9'),
('ejemplo.com/improvement10_img.jpg', 'ejemplo.com/improvement10_video.mp4', 'Texto de la mejora 10');
