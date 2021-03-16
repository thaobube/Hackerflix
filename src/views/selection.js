// Navigation Buttons
const recentFilmButton = '<button type="button" class="btn btn-secondary btn-recent">SHOW RECENT MOVIES</button>';

export const selection = `
    <div class="selection">
      <div class="selection__genre">
        <span>Sort by genre:</span><select id="selectField">
          <option value="1">All</option>
          <option value="2">Thrillers/Drama</option>
          <option value="3">Science Fiction/Fantasy</option>
          <option value="4">Action</option>
          <option value="5">Documentaries</option>
        </select>
      </div>
      <div class="selection__note">
        <span>Sort by notes:</span><select id="sortField">
          <option value="1">Descending</option>
          <option value="2">Ascending</option>
        </select>
      </div>
    </div>
    ${recentFilmButton}
`;
