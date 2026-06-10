Fashion lookbook

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fashion Lookbook</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <nav>
        <div class="logo"> 💃🏻Fashion Lookbook</div>
        <ul class="nav-links">
            <li><a href="#home" onclick="showPage('home')">Home</a></li>
            <li><a href="#categories" onclick="showPage('categories')">Categories</a></li>
            <li><a href="#lookbook" onclick="showPage('lookbook')">Lookbook</a></li>
            <li><a href="#contact" onclick="showPage('contact')">Join Us</a></li>
        </ul>
    </nav>

    <section id="home" class="page active">
        <div class="hero">
            <img src=""> 
            <h1>Fashion Lookbook</h1>
            
            <p>Your curated guide to style.</p>
            <button class="btn-primary" onclick="showPage('categories')">Explore</button>
        </div>
    </section>

    

    <section id="categories" class="page">
        <h2 class="section-title">Categories</h2>
        <div class="category-grid">
            <div class="cat-card" onclick="filterLookbook('Casual')">Casual</div>
            <div class="cat-card" onclick="filterLookbook('Formal')">Formal</div>
            <div class="cat-card" onclick="filterLookbook('Ethnic')">Ethnic</div>
            <div class="cat-card" onclick="filterLookbook('Vacation')">Vacation</div>
            <div class="cat-card" onclick="filterLookbook('Party')">Party Wear</div>
        </div>
    </section>

    <section id="lookbook" class="page">
        <h2 class="section-title" id="gallery-title">The Lookbook</h2>
        <div class="gallery" id="gallery">
            </div>
    </section>

    <section id="contact" class="page">
        <div class="glass-form">
            <h2>Style Profile</h2>
            <form>
                <input type="text" placeholder="Name" required>
                <input type="email" placeholder="Email" required>
                <select>
                    <option>Preference: Minimalist</option>
                    <option>Preference: Bohemian</option>
                    <option>Preference: Streetwear</option>
                </select>
                <button type="submit">Submit</button>
            </form>
        </div>
    </section>

    <script src="script.js"></script>
</body>
</html>
