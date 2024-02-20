import json

def calculer_moyenne_classe(donnees):
    moyennes_classe = []
    coefficients = {matiere: float(coeff.replace(',', '.')) for matiere, coeff in donnees["Coefficients"].items()}


    
    for eleve in donnees["Eleves"]:
        nom = eleve["Nom"]
        prenom = eleve["Prenom"]
        notes = {matiere: float(note.replace(',', '.')) for matiere, note in eleve["Notes"].items()}

        moyenne_eleve = sum(notes[matiere] * coefficients[matiere] for matiere in notes) / sum(coefficients.values())
        eleve["Moyenne"] = str(round(moyenne_eleve, 2))
        moyennes_classe.append(moyenne_eleve)

    moyenne_totale = sum(moyennes_classe) / len(moyennes_classe)

    donnees["Moyenne_classe"] = str(round(moyenne_totale, 2))

    with open(file_name, 'w') as fichier:
        json.dump(donnees, fichier, indent=2)


file_name = './services/csharp/resultat.json'

with open(file_name, 'r') as fichier:
    donnees_classe = json.load(fichier)

calculer_moyenne_classe(donnees_classe)
