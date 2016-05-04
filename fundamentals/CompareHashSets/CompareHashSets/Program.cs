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

            var bigCities = new HashSet<string>
                (StringComparer.InvariantCultureIgnoreCase)
            { "new york", "Manchester", "sheffield", "Paris"};

            bigCities.Add("SHEFFIELD");
            bigCities.Add("BEIJENG");

            foreach (string city in bigCities)
            {
                Console.WriteLine(city);
            }

            Console.ReadLine();
        }
    }
}
