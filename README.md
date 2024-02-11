// Include bootstrap's CDN in HTML page
    
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
      crossorigin="anonymous"
    />


    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Resim Bulma</title>
    <link rel="stylesheet" href="style.css" />
    <link rel="stylesheet" href="/ders/bootstrap/bootstrap.min.css" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
      crossorigin="anonymous"
    />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css"
    />
  </head>

  <body>
    <div class="container py-5">
      <div class="row gy-2 g-sm-0 p-2">
        <div class="col-12 col-sm-6">
          <form id="ınput-wrapper">
            <div class="form-floating">
              <input
                type="text"
                id="searchInput"
                class="form-control"
                placeholder="Arama yapın.."
              />
              <label for="searchInput">Arama yapın..</label>
            </div>
          </form>
        </div>
        <div class="col-12 col-sm-6 d-flex">
          <div class="col-6">
            <button class="btn btn-dark p-3 d-block w-100" id="searchButton">
              Ara
            </button>
          </div>
          <div class="col-6">
            <button class="btn btn-danger p-3 d-block w-100" id="clearButton">
              Temizle
            </button>
          </div>
        </div>
      </div>

      <hr class="my-4" />

      <div class="image-wrapper"></div>
    </div>

    <script src="main.js"></script>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
