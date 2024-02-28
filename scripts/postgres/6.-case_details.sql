CREATE TABLE case_details (
  id SERIAL PRIMARY KEY,
  image VARCHAR(255),
  video VARCHAR(255),
  text TEXT
);

INSERT INTO case_details (image, video, text)
VALUES
('ejemplo.com/imagen1.jpg', 'ejemplo.com/video1.mp4', 'Texto del caso 1'),
('ejemplo.com/imagen2.jpg', 'ejemplo.com/video2.mp4', 'Texto del caso 2'),
('ejemplo.com/imagen3.jpg', 'ejemplo.com/video3.mp4', 'Texto del caso 3'),
('ejemplo.com/imagen4.jpg', 'ejemplo.com/video4.mp4', 'Texto del caso 4'),
('ejemplo.com/imagen5.jpg', 'ejemplo.com/video5.mp4', 'Texto del caso 5'),
('ejemplo.com/imagen6.jpg', 'ejemplo.com/video6.mp4', 'Texto del caso 6'),
('ejemplo.com/imagen7.jpg', 'ejemplo.com/video7.mp4', 'Texto del caso 7'),
('ejemplo.com/imagen8.jpg', 'ejemplo.com/video8.mp4', 'Texto del caso 8'),
('ejemplo.com/imagen9.jpg', 'ejemplo.com/video9.mp4', 'Texto del caso 9'),
('ejemplo.com/imagen10.jpg', 'ejemplo.com/video10.mp4', 'Texto del caso 10');
