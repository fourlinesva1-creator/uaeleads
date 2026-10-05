'use client';

import { useLocale, useTranslations } from 'next-intl';
import {
    EMIRATES,
    EVENT_MAX_DAYS,
    GENERATOR_KVA,
    LONGTERM_MAX_MONTHS,
    LONGTERM_MIN_MONTHS,
    LONGTERM_TIERS,
    MAX_SIDE_M,
    MAX_TENTS,
    MIN_SIDE_M,
    SEATING_STYLES,
    USE_CASES,
    type GeneratorKva,
    type UseCase,
} from '@/data/calculator/rates';
import type { CalculatorSetup, EventPackage, Mode } from '@/lib/calculator/engine';
import { numberFormat } from '@/lib/calculator/format';
import { Hint, Section, Segmented, Select, Stepper, Toggle } from './fields';

interface Props {
    setup: CalculatorSetup;
    update: (patch: Partial<CalculatorSetup>) => void;
    onUseCase: (u: UseCase) => void;
    autoSize: boolean;
    onAutoSize: (on: boolean) => void;
    /** Floor area the guest count needs, and the tent we'd suggest for it. */
    needSqm: number;
    suggestion: { width: number; length: number; sqm: number } | null;
    onFillFurniture: () => void;
    acTons: number;
}

export default function SetupPanel({
    setup: s,
    update,
    onUseCase,
    autoSize,
    onAutoSize,
    needSqm,
    suggestion,
    onFillFurniture,
    acTons,
}: Props) {
    const t = useTranslations('calculator');
    const locale = useLocale();
    const nf = numberFormat(locale, 1);
    const monthNames = t.raw('months') as string[];
    const isEvent = s.mode === 'event';
    const sqm = s.width * s.length * s.tents;
    let step = 0;

    return (
        <div className="space-y-8">
            <Section step={++step} title={t('steps.useCase')}>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {USE_CASES.map((u) => (
                        <button
                            key={u}
                            type="button"
                            onClick={() => onUseCase(u)}
                            aria-pressed={s.useCase === u}
                            className={`rounded-xl border px-3 py-2.5 text-sm font-semibold text-start transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]/50 ${
                                s.useCase === u
                                    ? 'border-[#D4AF37] bg-[#D4AF37]/10 text-white'
                                    : 'border-[#282e39] bg-[#101622] text-[#9da6b9] hover:border-[#3b4354]'
                            }`}
                        >
                            {t(`useCases.${u}`)}
                        </button>
                    ))}
                </div>
                <Segmented<Mode>
                    legend={t('modes.legend')}
                    value={s.mode}
                    onChange={(mode) => update({ mode })}
                    options={[
                        { value: 'event', label: t('modes.event'), hint: t('modes.eventHint') },
                        { value: 'longterm', label: t('modes.longterm'), hint: t('modes.longtermHint') },
                    ]}
                />
            </Section>

            <Section step={++step} title={t('steps.guests')}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Stepper
                        label={t('fields.guests')}
                        value={s.guests}
                        onChange={(guests) => update({ guests })}
                        min={0}
                        max={20000}
                        step={s.guests >= 100 ? 10 : 5}
                        hint={t('fields.guestsNone')}
                    />
                    <Select
                        label={t('seating.label')}
                        value={s.seating}
                        onChange={(seating) => update({ seating })}
                        options={SEATING_STYLES.map((v) => ({ value: v, label: t(`seating.${v}`) }))}
                    />
                </div>
                {isEvent && (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
                        <Stepper label={t('fields.bars')} value={s.bars} onChange={(bars) => update({ bars })} min={0} max={20} />
                        <Stepper label={t('fields.buffets')} value={s.buffets} onChange={(buffets) => update({ buffets })} min={0} max={20} />
                        <div className="pb-2.5">
                            <Toggle label={t('fields.stage')} checked={s.stage} onChange={(stage) => update({ stage })} />
                        </div>
                    </div>
                )}
            </Section>

            <Section step={++step} title={t('steps.size')}>
                <Toggle
                    label={t('fields.autoSize')}
                    checked={autoSize}
                    onChange={onAutoSize}
                    hint={
                        suggestion && needSqm > 0
                            ? t('fields.suggested', {
                                  width: suggestion.width,
                                  length: suggestion.length,
                                  sqm: nf.format(suggestion.sqm),
                                  needed: nf.format(needSqm),
                              })
                            : undefined
                    }
                />
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <Stepper
                        label={t('fields.width')}
                        value={s.width}
                        onChange={(width) => update({ width })}
                        min={MIN_SIDE_M}
                        max={MAX_SIDE_M}
                    />
                    <Stepper
                        label={t('fields.length')}
                        value={s.length}
                        onChange={(length) => update({ length })}
                        min={MIN_SIDE_M}
                        max={MAX_SIDE_M}
                    />
                    <Stepper label={t('fields.tents')} value={s.tents} onChange={(tents) => update({ tents })} min={1} max={MAX_TENTS} />
                </div>
                <p className="text-sm font-semibold text-white">{t('fields.totalArea', { sqm: nf.format(sqm) })}</p>
                <Hint>{t('fields.sizeNote')}</Hint>
            </Section>

            <Section step={++step} title={t('steps.duration')}>
                {isEvent ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">
                        <div className="space-y-2">
                            <Stepper
                                label={t('fields.days')}
                                value={s.days}
                                onChange={(days) => update({ days })}
                                min={1}
                                max={EVENT_MAX_DAYS}
                            />
                            <button
                                type="button"
                                onClick={() => update({ days: 30 })}
                                className="text-xs font-semibold text-[#D4AF37] hover:underline"
                            >
                                {t('fields.fullRamadan')}
                            </button>
                            {s.days >= EVENT_MAX_DAYS && <Hint>{t('fields.longerThan30')}</Hint>}
                        </div>
                        <Select
                            label={t('fields.month')}
                            value={s.month}
                            onChange={(month) => update({ month })}
                            options={monthNames.map((name, i) => ({ value: i + 1, label: name }))}
                            hint={t('fields.monthHint')}
                        />
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">
                        <Stepper
                            label={t('fields.months')}
                            value={s.months}
                            onChange={(months) => update({ months })}
                            min={LONGTERM_MIN_MONTHS}
                            max={LONGTERM_MAX_MONTHS}
                            step={0.5}
                        />
                        <Select
                            label={t('fields.month')}
                            value={s.month}
                            onChange={(month) => update({ month })}
                            options={monthNames.map((name, i) => ({ value: i + 1, label: name }))}
                            hint={t('fields.monthHint')}
                        />
                    </div>
                )}
            </Section>

            <Section step={++step} title={t('steps.options')}>
                {isEvent ? (
                    <>
                        <Segmented<EventPackage>
                            legend={t('fields.package')}
                            value={s.package}
                            onChange={(pkg) => update({ package: pkg })}
                            options={[
                                { value: 'furnished', label: t('fields.furnished'), hint: t('fields.furnishedHint') },
                                { value: 'shade', label: t('fields.shade'), hint: t('fields.shadeHint') },
                            ]}
                        />
                        <Segmented<number>
                            legend={t('fields.sides')}
                            value={s.sides}
                            onChange={(sides) => update({ sides })}
                            columns={5}
                            options={[0, 1, 2, 3, 4].map((n) => ({
                                value: n,
                                label: n === 0 || n === 4 ? t('fields.sidesValue', { count: n }) : String(n),
                            }))}
                        />
                        <Toggle
                            label={t('fields.ac')}
                            checked={s.ac}
                            onChange={(ac) => update({ ac })}
                            hint={
                                s.ac
                                    ? t('fields.acHint', { tons: acTons, sqm: nf.format(sqm), month: monthNames[s.month - 1] })
                                    : undefined
                            }
                        />
                    </>
                ) : (
                    <>
                        <Segmented
                            legend={t('fields.tier')}
                            value={s.tier}
                            onChange={(tier) => update({ tier })}
                            columns={3}
                            options={LONGTERM_TIERS.map((v) => ({ value: v, label: t(`fields.${v}`), hint: t(`fields.${v}Hint`) }))}
                        />
                        {s.tier !== 'tentOnly' && (
                            <Hint>
                                {t('fields.acHint', { tons: acTons, sqm: nf.format(sqm), month: monthNames[s.month - 1] })}
                            </Hint>
                        )}
                    </>
                )}
            </Section>

            <Section step={++step} title={t('steps.furniture')}>
                {s.guests > 0 && (
                    <button
                        type="button"
                        onClick={onFillFurniture}
                        className="text-xs font-semibold text-[#D4AF37] hover:underline"
                    >
                        {t('fields.fillFurniture', { guests: s.guests })}
                    </button>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {isEvent ? (
                        <>
                            <Stepper
                                label={t('fields.majlisSeats')}
                                value={s.majlisSeats}
                                onChange={(majlisSeats) => update({ majlisSeats })}
                                min={0}
                                max={5000}
                                step={5}
                            />
                            <Stepper label={t('fields.chairs')} value={s.chairs} onChange={(chairs) => update({ chairs })} min={0} max={20000} step={10} />
                            <Stepper label={t('fields.tables')} value={s.tables} onChange={(tables) => update({ tables })} min={0} max={5000} />
                        </>
                    ) : (
                        <>
                            <Stepper label={t('fields.chairs')} value={s.chairs} onChange={(chairs) => update({ chairs })} min={0} max={20000} step={10} />
                            <Stepper label={t('fields.tables')} value={s.tables} onChange={(tables) => update({ tables })} min={0} max={5000} />
                            <Stepper label={t('fields.beds')} value={s.beds} onChange={(beds) => update({ beds })} min={0} max={20000} step={10} />
                            <Stepper
                                label={t('fields.coolingUnits')}
                                value={s.coolingUnits}
                                onChange={(coolingUnits) => update({ coolingUnits })}
                                min={0}
                                max={200}
                            />
                        </>
                    )}
                </div>
            </Section>

            <Section step={++step} title={t('steps.power')}>
                <Select<GeneratorKva>
                    label={t('fields.generator')}
                    value={s.generatorKva}
                    onChange={(generatorKva) => update({ generatorKva })}
                    options={[
                        { value: 0, label: t('fields.generatorNone') },
                        ...GENERATOR_KVA.map((kva) => ({ value: kva as GeneratorKva, label: t('fields.generatorKva', { kva }) })),
                    ]}
                />
            </Section>

            <Section step={++step} title={t('steps.location')}>
                <Select
                    label={t('fields.emirate')}
                    value={s.emirate}
                    onChange={(emirate) => update({ emirate })}
                    options={EMIRATES.map((e) => ({ value: e, label: t(`emirates.${e}`) }))}
                />
            </Section>
        </div>
    );
}

