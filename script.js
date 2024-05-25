btn.addEventListener("click", function () {
  async function everything() {
    const input = document.querySelector("#input");
    const username = input.value;
    const url = `https://api.github.com/users/${username}`;
    const mydiv = document.querySelector("#div");
    mydiv.innerHTML = "";

    try {
      const response = await fetch(url);

      const data = await response.json();

      const login = document.createElement("p");
      login.textContent = "Login: " + data.login;
      mydiv.appendChild(login);

      const id = document.createElement("p");
      id.textContent = "Id: " + data.id;
      mydiv.appendChild(id);

      const nodeId = document.createElement("p");
      nodeId.textContent = "Node Id: " + data.node_id;
      mydiv.appendChild(nodeId);
      const myDiv2 = document.createElement("div");
      myDiv2.classList.toggle("yes");
      mydiv.appendChild(myDiv2);
      const avatarUrimg = document.createElement("img");
      avatarUrimg.src = data.avatar_url;
      avatarUrimg.classList.toggle("re");
      const avatarUrl = document.createElement("p");
      avatarUrl.textContent = "Avatar Url: " + data.avatar_url;
      myDiv2.appendChild(avatarUrl);
      myDiv2.appendChild(avatarUrimg);

      const urlz = document.createElement("p");
      urlz.textContent = "Url: " + data.url;
      mydiv.appendChild(urlz);

      const htmlurl = document.createElement("p");
      login.textContent = "Html Url: " + data.html_url;
      mydiv.appendChild(htmlurl);

      const followers = document.createElement("p");
      followers.textContent = "Followers: " + data.followers_url;
      mydiv.appendChild(followers);

      const following = document.createElement("p");
      following.textContent = "Following: " + data.following_url;
      mydiv.appendChild(following);

      const gists_url = document.createElement("p");
      gists_url.textContent = "Gists Url: " + data.gists_url;
      mydiv.appendChild(gists_url);

      const star = document.createElement("p");
      star.textContent = "Starred url: " + data.starred_url;
      mydiv.appendChild(star);

      const Subscription = document.createElement("p");
      Subscription.textContent = "Subscriptions Url: " + data.subscriptions_url;
      mydiv.appendChild(Subscription);

      const org = document.createElement("p");
      org.textContent = "Organizations url: " + data.organizations_url;
      mydiv.appendChild(org);

      const repo = document.createElement("p");
      repo.textContent = "Repos Url: " + data.repos_url;
      mydiv.appendChild(repo);

      const event = document.createElement("p");
      event.textContent = "Events Url: " + data.events_url;
      mydiv.appendChild(event);

      const rec = document.createElement("p");
      rec.textContent = "Recieved events Url: " + data.received_events_url;
      mydiv.appendChild(rec);

      const type = document.createElement("p");
      type.textContent = "Type: " + data.type;
      mydiv.appendChild(type);

      const site = document.createElement("p");
      site.textContent = "Site Admin: " + data.site_admin;
      mydiv.appendChild(site);

      const user = document.createElement("p");
      user.textContent = "Name: " + data.name;
      mydiv.appendChild(user);

      const company = document.createElement("p");
      company.textContent = "Company: " + data.company;
      mydiv.appendChild(company);

      const blog = document.createElement("p");
      blog.textContent = "Blog: " + data.blog;
      mydiv.appendChild(blog);

      const loc = document.createElement("p");
      loc.textContent = "Location: " + data.location;
      mydiv.appendChild(loc);

      const email = document.createElement("p");
      email.textContent = "Email: " + data.email;
      mydiv.appendChild(email);

      const hireable = document.createElement("p");
      hireable.textContent = "Hireable: " + data.hireable;
      mydiv.appendChild(hireable);

      const bio = document.createElement("p");
      bio.textContent = "Bio: " + data.bio;
      mydiv.appendChild(bio);

      const twi = document.createElement("p");
      twi.textContent = "Twitter Username: " + data.twitter_username;
      mydiv.appendChild(twi);

      const pubr = document.createElement("p");
      pubr.textContent = "Public Repository: " + data.public_repos;
      mydiv.appendChild(pubr);

      const pubg = document.createElement("p");
      pubg.textContent = "Public Gists: " + data.public_gists;
      mydiv.appendChild(pubg);

      const followersz = document.createElement("p");
      followersz.textContent = "Followers: " + data.followers;
      mydiv.appendChild(followersz);

      const followingz = document.createElement("p");
      followingz.textContent = "Following: " + data.following;
      mydiv.appendChild(followingz);

      const created = document.createElement("p");
      created.textContent = "Created At: " + data.created_at;
      mydiv.appendChild(created);

      const upd = document.createElement("p");
      upd.textContent = "Updated At: " + data.updated_at;
      mydiv.appendChild(upd);

      const clearButton = document.querySelector("#clear");
      clearButton.addEventListener("click", function () {
        mydiv.innerHTML = "";
        Time.textContent = "";
      });

      const Time = document.querySelector("#timer");

      Time.textContent = `Information Clears After 20 Seconds.`;
      setTimeout(function () {
        Time.textContent = "";
        mydiv.innerHTML = "";
      }, 20000);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  everything();
});
