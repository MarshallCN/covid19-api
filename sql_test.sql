Insert into options values (nextval('options_id_seq'),'1m',1,'a',False),(nextval('options_id_seq'),'1.5m',1,'b',True),
(nextval('options_id_seq'),'2m',1,'c',False),(nextval('options_id_seq'),'3m',1,'d',False);

Insert into options values (nextval('options_id_seq'),'Yes',2,'a',True),(nextval('options_id_seq'),'No',2,'b',False);

select q.questions,o.*  from quiz as q inner join options as o on q.id=o.ques_id where level = 1;