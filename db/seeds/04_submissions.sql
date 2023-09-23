-- user_name is optional and default as 'Anonymous'

INSERT INTO submissions (poll_id, time_submitted, points) VALUES ('5Wq2sD',current_timestamp, '{4,1,2,3}');
INSERT INTO submissions (poll_id, time_submitted, points, user_name) VALUES ('5Wq2sD',current_timestamp, '{1,2,3,4}','Bob');

INSERT INTO submissions (poll_id, time_submitted, points) VALUES ('q35Wha',current_timestamp, '{4,3,1,5,2}');
INSERT INTO submissions (poll_id, time_submitted, points, user_name) VALUES ('q35Wha',current_timestamp, '{1,3,2,5,4}', 'Claire');
