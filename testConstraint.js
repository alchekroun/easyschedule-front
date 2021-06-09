/*
const mathematiques = new Course(1,"TypeMathematiques","Mathematiques",30);
S.decl('a', [[1,10]]);
S.decl('b', [[1,5]]);
S.decl('c',[[1,19]]);
S.gt('a', 'b');
S.eq('b','c');
FD.distribute.naive(S, ['a', 'b','c']);

const mathematiques = new Course(1,2,"Mathematiques",18);
const francais = new Course(2,1,"Francais",12);


S.num("FR",1);
S.num("Ma",2);

S.num("nbFr",4);
S.num("nbMa",2);

S.decl("L1M",[[1,2]]);
S.decl("L2M",[[1,2]]);
S.decl("L3M",[[1,2]]);
S.decl("L4M",[[1,2]]);
S.decl("L5M",[[1,2]]);
S.decl("L6M",[[1,2]]);
S.num("total",4);

S.num("L1",1);
S.num("L2",2);
S.num("L3",3);
S.num("L4",4);
S.num("L5",5);
S.num("L6",6);


S.decl("S1",[[1,6]]);
S.decl("S2",[[1,6]]);
S.decl("S3",[[1,6]]);
S.decl("S4",[[1,6]]);
S.decl("S5",[[1,6]]);
S.decl("S6",[[1,6]]);


S.distinct(["S1","S2","S3","S4","S5","S6"]);
S.product(["L1M","L2M","L3M","L4M","L5M","L6M"],"total");

FD.distribute.naive(S, ["S1","S2","S3","S4","S5","S6","L1M","L2M","L3M","L4M","L5M","L6M"]); */



//COMPETENCES DU PROFESSEUR1
/* S.num("P1C1",1);
S.num("P1C2",2); */
S.decl("P1C",[[2,2],[4,4]]);
//COMPETENCE DU PROFESSEUR2
/*S.num("P2C1",3);
S.num("P2C2",4); */
S.decl("P2C",[[1,1],[3,3]]);

// MATIERE
S.num("M1",1);
S.num("M2",2);
//COMPETENCE POUR ENSEIGNER LES MATIERES 
S.num("M1C",4);
S.num("M2C",3);

//MATIERE ENSEIGNÉ PAR LE PROF
S.decl("M1Prof",[[1,2]]);
S.decl("M2Prof",[[1,2]]); 

S.decl("PP",[[1,2]]);

S.eq("P1C","M1C");
S.eq("PP","M1Prof");
S.eq("P1C","M2C");
S.eq("PP","M2Prof");

S.eq("P2C","M1C");

S.eq("P2C","M2C");

FD.distribute.naive(S, ["PP","P1C","M1C","M1Prof","P2C","M2C","M2Prof"]);

//Ensemble des profs
S.decl("PP",[[1,2]]);
//Competence de chaque prof
S.decl("P1C",[[2,2],[4,4]]);
S.decl("P2C",[[1,1],[3,3]]);

// MATIERE
S.num("M1",1);
S.num("M2",2);
//COMPETENCE POUR ENSEIGNER LES MATIERES 
S.num("M1C",4);
S.num("M2C",3);

//MATIERE ENSEIGNÉ PAR LE PROF
S.decl("M1Prof",[[1,2]]);
S.decl("M2Prof",[[1,2]]); 



S.eq("P1C","M1C");
S.eq("PP","M1Prof");
S.eq("P1C","M2C");
S.eq("PP","M2Prof");

S.eq("P2C","M1C");

S.eq("P2C","M2C");

FD.distribute.naive(S, ["PP","P1C","M1C","M1Prof","P2C","M2C","M2Prof"]);












