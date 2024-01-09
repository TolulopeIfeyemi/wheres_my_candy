import { useRecords } from '@puzzlehq/sdk';

export const useMsRecords = (address?: string) => {
  const { records } = useRecords({
    filter: {
      programIds: [
        'wheres_the_candy_v001.aleo',
        'candy_pieces_v001.aleo',
        'multiparty_pvp_utils_v015.aleo',
      ],
      type: 'unspent',
    },
    address,
    multisig: true,
  });
  const msGameRecords = records?.filter(
    (record) => record.programId === 'wheres_the_candy_v001.aleo'
  );
  const msPuzzleRecords = records?.filter(
    (record) => record.programId === 'candy_pieces_v001.aleo'
  );
  const msUtilRecords = records?.filter(
    (record) => record.programId === 'multiparty_pvp_utils_v015.aleo'
  );

  console.log([msGameRecords, msPuzzleRecords, msUtilRecords]);

  return { msPuzzleRecords, msGameRecords, msUtilRecords };
};
