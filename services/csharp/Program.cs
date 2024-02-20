using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Newtonsoft.Json;

public class Eleve
{
    public string Nom { get; set; }
    public string Prenom { get; set; }
    public Dictionary<string, string> Notes { get; set; }
}

public class Resultat
{
    public List<Eleve> Eleves { get; set; }
    public Dictionary<string, string> Coefficients { get; set; }
}

class Program
{
    static void Main(string[] args)
    {
        var lines = File.ReadAllLines("../../../donnees.csv");
        var eleves = new List<Eleve>();
        var coefficients = new Dictionary<string, string>();

        var headerValues = lines[0].Split(';');
        var headers = new List<string>();


        foreach (var header in headerValues)
        {
            headers.Add(header);
        }

        for (int i = 0; i < 28; i++)
        {
            var values = lines[i].Split(';');

            if (i > 1 && i < 23)
            {
                var eleve = new Eleve
                {
                    Nom = values[5],
                    Prenom = values[6],
                    Notes = new Dictionary<string, String>()
                };

                for (int indiceNote = 14; indiceNote <= 22; indiceNote++)
                {
                    eleve.Notes.Add(headers[indiceNote], values[indiceNote]);
                }

                for (int indiceNote = 25; indiceNote <= 30; indiceNote++)
                {
                    eleve.Notes.Add(headers[indiceNote], values[indiceNote]);
                }


                eleves.Add(eleve);

            }
            else if (i == 27)
            {
                for (int j = 14; j <= 22; j++)
                {
                    coefficients.Add(headers[j], values[j]);
                }

                for (int j = 25; j <= 30; j++)
                {
                    coefficients.Add(headers[j], values[j]);
                }

            }
        }

        var resultat = new Resultat { Eleves = eleves, Coefficients = coefficients  };
        var jsonResultat = JsonConvert.SerializeObject(resultat, Formatting.Indented);

        File.WriteAllText("../../../resultat.json", jsonResultat);
    }
}
