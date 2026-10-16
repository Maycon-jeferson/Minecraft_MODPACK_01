// Almost Unified hides non-dominant tag members; these explicit hides cover
// the duplicate ore blocks and legacy metal forms in the installed tech mods.
RecipeViewerEvents.removeEntries('item', event => {
  function hideMany(items) { items.forEach(item => event.remove(item)); }

  const mekanism = [];
  ['lead', 'osmium', 'tin', 'uranium'].forEach(m => {
    mekanism.push(`mekanism:${m}_ore`, `mekanism:deepslate_${m}_ore`,
      `mekanism:raw_${m}`, `mekanism:block_raw_${m}`, `mekanism:ingot_${m}`,
      `mekanism:dust_${m}`, `mekanism:dirty_dust_${m}`, `mekanism:clump_${m}`,
      `mekanism:crystal_${m}`, `mekanism:shard_${m}`);
  });
  ['copper', 'gold', 'iron'].forEach(m => {
    mekanism.push(`mekanism:dust_${m}`, `mekanism:dirty_dust_${m}`,
      `mekanism:clump_${m}`, `mekanism:crystal_${m}`, `mekanism:shard_${m}`);
  });
  mekanism.push('mekanism:fluorite_ore', 'mekanism:deepslate_fluorite_ore',
    'mekanism:fluorite_gem', 'mekanism:block_fluorite', 'mekanism:dust_fluorite');
  hideMany(mekanism);

  const ie = [];
  ['aluminum', 'lead', 'nickel', 'silver', 'uranium'].forEach(m => {
    ie.push(`immersiveengineering:ore_${m}`, `immersiveengineering:deepslate_ore_${m}`,
      `immersiveengineering:raw_${m}`, `immersiveengineering:raw_block_${m}`);
  });
  ['aluminum', 'constantan', 'electrum', 'lead', 'nickel', 'silver', 'steel', 'uranium'].forEach(m => {
    ie.push(`immersiveengineering:ingot_${m}`, `immersiveengineering:dust_${m}`);
  });
  ['copper', 'gold', 'iron'].forEach(m => ie.push(`immersiveengineering:dust_${m}`));
  ie.push('immersiveengineering:dust_sulfur');
  ['aluminum', 'constantan', 'copper', 'electrum', 'gold', 'iron', 'lead', 'nickel', 'silver', 'steel', 'uranium'].forEach(m => {
    ie.push(`immersiveengineering:plate_${m}`);
  });
  hideMany(ie);
});
