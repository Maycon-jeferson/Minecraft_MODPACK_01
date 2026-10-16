// Almost Unified selects the AllTheOres output for shared c:* materials and
// ATO supplies native Create, Immersive Engineering and Mekanism recipes.
// These conversions are for legacy items already present in existing worlds.
ServerEvents.recipes(event => {
  function convert(input, output) {
    event.shapeless(output, [input]).id(`kubejs:unify/${input.replace(':', '/')}`);
  }

  const mekOres = ['lead', 'osmium', 'tin', 'uranium'];
  mekOres.forEach(m => {
    convert(`mekanism:${m}_ore`, `alltheores:${m}_ore`);
    convert(`mekanism:deepslate_${m}_ore`, `alltheores:deepslate_${m}_ore`);
    convert(`mekanism:raw_${m}`, `alltheores:raw_${m}`);
    convert(`mekanism:block_raw_${m}`, `alltheores:raw_${m}_block`);
    convert(`mekanism:ingot_${m}`, `alltheores:${m}_ingot`);
    convert(`mekanism:dust_${m}`, `alltheores:${m}_dust`);
    convert(`mekanism:dirty_dust_${m}`, `alltheores:dirty_${m}_dust`);
    convert(`mekanism:clump_${m}`, `alltheores:${m}_clump`);
    convert(`mekanism:crystal_${m}`, `alltheores:${m}_crystal`);
    convert(`mekanism:shard_${m}`, `alltheores:${m}_shard`);
  });

  ['copper', 'gold', 'iron'].forEach(m => {
    convert(`mekanism:dust_${m}`, `alltheores:${m}_dust`);
    convert(`mekanism:dirty_dust_${m}`, `alltheores:dirty_${m}_dust`);
    convert(`mekanism:clump_${m}`, `alltheores:${m}_clump`);
    convert(`mekanism:crystal_${m}`, `alltheores:${m}_crystal`);
    convert(`mekanism:shard_${m}`, `alltheores:${m}_shard`);
  });

  convert('mekanism:fluorite_ore', 'alltheores:fluorite_ore');
  convert('mekanism:deepslate_fluorite_ore', 'alltheores:deepslate_fluorite_ore');
  convert('mekanism:fluorite_gem', 'alltheores:fluorite');
  convert('mekanism:block_fluorite', 'alltheores:fluorite_block');
  convert('mekanism:dust_fluorite', 'alltheores:fluorite_dust');

  const ieOres = ['aluminum', 'lead', 'nickel', 'silver', 'uranium'];
  ieOres.forEach(m => {
    convert(`immersiveengineering:ore_${m}`, `alltheores:${m}_ore`);
    convert(`immersiveengineering:deepslate_ore_${m}`, `alltheores:deepslate_${m}_ore`);
    convert(`immersiveengineering:raw_${m}`, `alltheores:raw_${m}`);
    convert(`immersiveengineering:raw_block_${m}`, `alltheores:raw_${m}_block`);
  });

  ['aluminum', 'constantan', 'electrum', 'lead', 'nickel', 'silver', 'steel', 'uranium'].forEach(m => {
    convert(`immersiveengineering:ingot_${m}`, `alltheores:${m}_ingot`);
    convert(`immersiveengineering:dust_${m}`, `alltheores:${m}_dust`);
  });
  ['copper', 'gold', 'iron'].forEach(m => convert(`immersiveengineering:dust_${m}`, `alltheores:${m}_dust`));
  convert('immersiveengineering:dust_sulfur', 'alltheores:sulfur');

  // Coke, hop graphite and duroplast are IE-specific and intentionally retained.
  ['aluminum', 'constantan', 'copper', 'electrum', 'gold', 'iron', 'lead', 'nickel', 'silver', 'steel', 'uranium'].forEach(m => {
    convert(`immersiveengineering:plate_${m}`, `alltheores:${m}_plate`);
  });
});

