-- user_name is optional and default as 'Anonymous'

INSERT INTO submissions (poll_id, time_submitted, points) VALUES ('5Wq2sD',current_timestamp, '{0,3,2,1}');
INSERT INTO submissions (poll_id, time_submitted, points, user_name) VALUES ('5Wq2sD',current_timestamp, '{0,1,2,3}','Bob');

INSERT INTO submissions (poll_id, time_submitted, points) VALUES ('q35Wha',current_timestamp, '{1,2,4,0,3}');
INSERT INTO submissions (poll_id, time_submitted, points, user_name) VALUES ('q35Wha',current_timestamp, '{4,2,3,0,1}', 'Claire');
