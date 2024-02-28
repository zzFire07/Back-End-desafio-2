CREATE TABLE challenges (
  id SERIAL PRIMARY KEY,
  image VARCHAR(255),
  video VARCHAR(255),
  text TEXT
);

INSERT INTO challenges (image, video, text)
VALUES
('ejemplo.com/challenge1_img.jpg', 'ejemplo.com/challenge1_video.mp4', 'Texto del desafío 1'),
('ejemplo.com/challenge2_img.jpg', 'ejemplo.com/challenge2_video.mp4', 'Texto del desafío 2'),
('ejemplo.com/challenge3_img.jpg', 'ejemplo.com/challenge3_video.mp4', 'Texto del desafío 3'),
('ejemplo.com/challenge4_img.jpg', 'ejemplo.com/challenge4_video.mp4', 'Texto del desafío 4'),
('ejemplo.com/challenge5_img.jpg', 'ejemplo.com/challenge5_video.mp4', 'Texto del desafío 5'),
('ejemplo.com/challenge6_img.jpg', 'ejemplo.com/challenge6_video.mp4', 'Texto del desafío 6'),
('ejemplo.com/challenge7_img.jpg', 'ejemplo.com/challenge7_video.mp4', 'Texto del desafío 7'),
('ejemplo.com/challenge8_img.jpg', 'ejemplo.com/challenge8_video.mp4', 'Texto del desafío 8'),
('ejemplo.com/challenge9_img.jpg', 'ejemplo.com/challenge9_video.mp4', 'Texto del desafío 9'),
('ejemplo.com/challenge10_img.jpg', 'ejemplo.com/challenge10_video.mp4', 'Texto del desafío 10');
