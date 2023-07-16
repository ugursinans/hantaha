﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace API.Controllers
{
    [ApiController]
    [Route("api/{controller}")]
    public class CountriesController : ControllerBase
    {
        [HttpGet]
        public Countries GetAllCountries()
        {
            return View();
        }
    }
}

