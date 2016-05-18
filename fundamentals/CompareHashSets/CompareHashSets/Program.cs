using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace CompareHashSets
{
    class Program
    {
        static void Main(string[] args)
        {

            var bigCities = new string[]
            { "new york", "Manchester", "sheffield", "Paris"};

            bigCities.Add("SHEFFIELD");
            bigCities.Add("BEIJENG");

            string[] citiesInUk = { "Sheffield", "Ripon", "truoro", "manchester"};

            var newCities = bigCities.IntersectWith(citiesInUk);

            foreach (string city in newCities)
            {
                Console.WriteLine(city);
            }

            Console.ReadLine();
        }
    }
}
